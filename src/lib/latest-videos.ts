// Newest non-live upload per channel, resolved at build time.
// Order: YouTube Data API v3 → src/data/latest-videos.json (cache) → latestVideoId in site.config.ts.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

type Channel = { name: string; channelId: string; latestVideoId: string };
type Cache = Record<string, { channel: string; videoId: string }>;

const API = 'https://www.googleapis.com/youtube/v3';
const CACHE_FILE = path.join(process.cwd(), 'src/data/latest-videos.json');

async function getJson(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const reason = (await res.json().catch(() => null))?.error?.errors?.[0]?.reason;
    throw new Error(`HTTP ${res.status}${reason ? ` ${reason}` : ''}`);
  }
  return res.json();
}

async function newestUpload(channelId: string, key: string): Promise<string> {
  const uploads = `UU${channelId.slice(2)}`;
  const list = await getJson(
    `${API}/playlistItems?part=contentDetails&maxResults=10&playlistId=${uploads}&key=${key}`,
  );
  const ids: string[] = (list.items ?? []).map((i: any) => i.contentDetails.videoId);
  if (!ids.length) return '';

  const videos = await getJson(
    `${API}/videos?part=snippet,contentDetails,liveStreamingDetails&id=${ids.join(',')}&key=${key}`,
  );
  const newest = (videos.items ?? [])
    .filter((v: any) => !v.liveStreamingDetails && v.snippet.liveBroadcastContent === 'none')
    .sort((a: any, b: any) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt))[0];
  return newest?.id ?? '';
}

async function readCache(): Promise<Cache> {
  try {
    return JSON.parse(await readFile(CACHE_FILE, 'utf8'));
  } catch {
    return {};
  }
}

export async function latestVideoIds(channels: readonly Channel[]): Promise<Record<string, string>> {
  // .env locally via import.meta.env; a plain environment variable in CI.
  const key = import.meta.env.YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY;
  const cache = await readCache();
  const fresh: Cache = { ...cache };
  const result: Record<string, string> = {};

  for (const c of channels) {
    let apiNote = 'no YOUTUBE_API_KEY';
    if (key) {
      try {
        const id = await newestUpload(c.channelId, key);
        if (id) {
          fresh[c.channelId] = { channel: c.name, videoId: id };
          result[c.channelId] = id;
          console.log(`[latest-videos] ${c.name}: ${id} (API)`);
          continue;
        }
        apiNote = 'API found no non-live video in the last 10 uploads';
      } catch (err) {
        apiNote = `API failed: ${(err as Error).message}`;
      }
    }

    const cached = cache[c.channelId]?.videoId;
    const id = cached || c.latestVideoId;
    const source = cached ? 'cache' : id ? 'config' : 'none, showing placeholder';
    result[c.channelId] = id;
    console.log(`[latest-videos] ${c.name}: ${id || '-'} (${source}; ${apiNote})`);
  }

  if (JSON.stringify(fresh) !== JSON.stringify(cache)) {
    await mkdir(path.dirname(CACHE_FILE), { recursive: true });
    await writeFile(CACHE_FILE, `${JSON.stringify(fresh, null, 2)}\n`);
  }
  return result;
}
