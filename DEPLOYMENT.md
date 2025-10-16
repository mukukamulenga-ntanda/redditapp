# Deployment

## GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch triggers automatic deployment
4. Site will be available at: `https://YOUR_USERNAME.github.io/redditapp/`

Manual deployment:
```bash
npm run build
npm run deploy
```

## Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Or connect your GitHub repository in the Netlify dashboard.

## Vercel

```bash
npm install -g vercel
vercel --prod
```

Or import your repository at vercel.com.

## Local Preview

```bash
npm run build
npm run preview
```

The app will be available at `http://localhost:4173`
