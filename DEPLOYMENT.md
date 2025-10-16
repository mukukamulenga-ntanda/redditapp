# Deployment Guide

This guide will help you deploy your Reddit Client application to various platforms.

## Option 1: GitHub Pages (Recommended - Free)

GitHub Pages is free and integrates seamlessly with our CI/CD pipeline.

### Steps:

1. **Create a GitHub repository:**
   ```bash
   # If you haven't already connected to GitHub
   gh repo create reddit-client --public --source=. --remote=origin
   # Or manually create a repo on GitHub and add it as remote:
   git remote add origin https://github.com/YOUR_USERNAME/redditapp.git
   ```

2. **Push your code to GitHub:**
   ```bash
   git push -u origin master
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on `Settings` → `Pages`
   - Under "Source", select `gh-pages` branch
   - Click `Save`

4. **The CI/CD pipeline will automatically deploy:**
   - Every push to `master` branch triggers deployment
   - Wait for the GitHub Action to complete
   - Your site will be available at: `https://YOUR_USERNAME.github.io/redditapp/`

### Manual Deployment to GitHub Pages:

If you prefer to deploy manually:

```bash
npm run build
npx gh-pages -d dist
```

## Option 2: Netlify (Free)

Netlify offers easy deployment with automatic HTTPS and custom domains.

### Steps:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Or use Netlify's UI:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

## Option 3: Vercel (Free)

Vercel provides excellent performance and easy deployment.

### Steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Or use Vercel's UI:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Deploy!

## Option 4: Firebase Hosting (Free Tier)

Firebase offers fast, secure hosting with a generous free tier.

### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login and initialize:**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure:**
   - Public directory: `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds with GitHub: `No` (or `Yes` if you prefer)

4. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Environment Variables

If you need environment variables for production:

1. Create `.env.production`:
   ```
   VITE_API_BASE_URL=https://www.reddit.com
   ```

2. For platform-specific env vars:
   - **GitHub Pages**: Use repository secrets
   - **Netlify**: Add in Site settings → Environment variables
   - **Vercel**: Add in Project settings → Environment Variables
   - **Firebase**: Use `firebase functions:config:set`

## Custom Domain (Optional)

### GitHub Pages:
1. Go to Settings → Pages
2. Enter your custom domain
3. Add DNS records (A or CNAME) from your domain provider

### Other Platforms:
- Follow the platform's documentation for custom domains
- Most platforms provide automatic HTTPS with Let's Encrypt

## Performance Optimization

Before deploying, ensure optimal performance:

1. **Check bundle size:**
   ```bash
   npm run build -- --mode production
   ```

2. **Analyze bundle:**
   ```bash
   npm install -D rollup-plugin-visualizer
   # Add to vite.config.js and rebuild
   ```

3. **Enable compression** (usually automatic on hosting platforms)

4. **Use CDN** (GitHub Pages, Netlify, Vercel all use CDNs automatically)

## Monitoring After Deployment

1. **Test your deployment:**
   - Open the deployed URL
   - Test all features (search, filters, post detail)
   - Test on mobile devices
   - Test on different browsers

2. **Run Lighthouse:**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit on deployed site
   - Aim for 90+ scores

3. **Monitor errors:**
   - Set up error tracking (Sentry, LogRocket, etc.)
   - Monitor loading times
   - Check analytics

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: Configure your hosting for SPA routing:
- **Netlify**: Create `_redirects` file with `/* /index.html 200`
- **Vercel**: Add `vercel.json` with rewrites
- **GitHub Pages**: Already configured in the build

### Issue: Assets not loading
**Solution**: Check the `base` path in `vite.config.js` matches your deployment path

### Issue: Build fails
**Solution**: 
- Check Node.js version (18+ required)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for linter errors: `npm run lint`

## Quick Deploy Commands

```bash
# Build locally
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (manual)
npx gh-pages -d dist

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Deploy to Vercel
vercel --prod

# Deploy to Firebase
firebase deploy
```

## Next Steps After Deployment

1. ✅ Share your deployed URL!
2. 📊 Set up analytics (Google Analytics, Plausible, etc.)
3. 🐛 Set up error tracking (Sentry)
4. 📈 Monitor performance with Lighthouse CI
5. 🔄 Set up automatic deployments (if not using GitHub Actions)
6. 🌐 Configure a custom domain (optional)
7. 📱 Test as PWA and add to home screen

## Support

If you encounter issues:
- Check the platform's documentation
- Review GitHub Actions logs (for GitHub Pages)
- Check browser console for errors
- Open an issue in this repository

Happy deploying! 🚀

