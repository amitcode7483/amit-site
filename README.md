# amit-site

Personal site: engineer by day, creator by weekend. Built with [Astro](https://astro.build), fully static, no framework runtime. The hero mascot ("Bit") is plain SVG plus about 60 lines of vanilla JS in `src/components/Mascot.astro`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static files to dist/
npm run preview    # serve the built site
```

## Edit content

Almost everything lives in **`src/site.config.ts`**: email, social links, stats, projects, channels.
Replace every `[PLACEHOLDER]` and `'#'` link before going live.

- **Latest Shorts:** set `latestVideoId` on each channel to a YouTube video/Short ID to embed it.
- **Colours:** `--accent` and `--bird` at the top of `src/styles/global.css`.
- **Domain:** set `site` in `astro.config.mjs` once you have one.

## Deploy to Cloudflare Pages (free, commercial use OK)

1. Push this folder to a new GitHub repo:
   ```bash
   git init && git add . && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/amitcode7483/amit-site.git
   git push -u origin main
   ```
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, then pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. You get a `*.pages.dev` URL in about a minute, and every push to `main` redeploys.
5. Custom domain: **your Pages project → Custom domains → Set up a domain**. SSL is automatic.

Same settings work on Netlify or Vercel (build `npm run build`, output `dist`).
