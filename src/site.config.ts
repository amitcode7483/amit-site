// Everything you'll want to edit lives here. Replace the [PLACEHOLDERS] before going live.

export const site = {
  name: 'Amit',
  title: 'Amit — Engineer by day, creator by weekend',
  description:
    'Senior full-stack engineer in Sydney building applied-AI systems, and the creator behind GameGeek and AusiDesi on YouTube.',
  email: 'amitcode7483@gmail.com',
  links: {
    github: 'https://github.com/amitcode7483',
    linkedin: 'https://www.linkedin.com/in/amitsharma77/', // [YOUR LINKEDIN URL]
    youtube: 'https://www.youtube.com/@gamegeekfun', // [YOUR YOUTUBE URL]
  },
  stats: [
    { value: '20+', label: 'years in engineering', tone: 'yellow' },
    { value: '48k', label: 'GameGeek subscribers', tone: 'blue' },
    { value: '7', label: 'apibird releases shipped', tone: 'green' },
  ],
  stack: ['React', 'TypeScript', 'NestJS', 'Node.js', 'AWS Bedrock', 'RAG', 'Playwright', 'Expo', 'PostGIS'],
  projects: [
    {
      name: 'apibird',
      badge: '7 releases',
      badgeTone: 'yellow',
      kicker: 'VS Code extension',
      visual: 'GET {{baseUrl}}/claims → 200',
      tone: 'blue',
      body: 'A REST client that lives in VS Code. Git-synced collections, secrets kept out of commits, and Postman, Thunder Client and cURL import.',
      tags: 'TypeScript · VS Code API · SecretStorage',
      href: 'https://github.com/amitcode7483/apibird',
    },
    {
      name: 'Policy RAG',
      badge: 'In progress',
      badgeTone: 'orange',
      kicker: 'Applied AI',
      visual: '“Is flood covered?” → Yes, §4.2, p.17',
      tone: 'green',
      body: 'Ask questions of insurance documents and get answers that cite the clause. Retrieval, chunking and evaluation on AWS Bedrock.',
      tags: 'Python · Bedrock · Vector DB',
      href: '',
    },
    {
      name: 'Sport app',
      badge: 'Building',
      badgeTone: 'orange',
      kicker: 'Mobile · Geo',
      visual: '3 games within 5 km',
      tone: 'yellow',
      body: 'Find a game near you, starting with cricket in Sydney. Geo discovery on PostGIS, a NestJS and Prisma API, and an Expo mobile app.',
      tags: 'NestJS · PostGIS · Expo',
      href: '',
    },
  ],
  channels: [
    {
      name: 'GameGeek',
      kicker: 'Gaming',
      body: 'Games, hands-on. A 48k-strong community built one Short at a time.',
      href: 'https://www.youtube.com/@gamegeekfun',
      // The newest non-live upload is fetched with the YouTube Data API at build time (see src/lib/latest-videos.ts).
      channelId: 'UClBs-pjC-QD4Df-HcnQIAlQ',
      // Last-resort fallback if the API and src/data/latest-videos.json have nothing: a YouTube video/Short ID, e.g. 'dQw4w9WgXcQ'.
      latestVideoId: 'sJRYiSqlCbQ',
      tone: 'red',
    },
    {
      name: 'AusiDesi',
      kicker: 'Sydney life',
      body: 'Sydney travel and lifestyle — the places, food and weekends worth sharing.',
      href: 'https://www.youtube.com/@ausi_desi',
      channelId: 'UCoO7s4GZbuNwiaGHJczQpGw',
      latestVideoId: 'MSj2HcdWnns',
      tone: 'blue',
    },
  ],
} as const;
