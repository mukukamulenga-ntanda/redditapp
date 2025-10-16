# Getting Started with Your Reddit Client

Congratulations! Your Reddit Client is ready to deploy. Follow these steps to get your application online.

## 🚀 Quick Deployment Steps

### Step 1: Create a GitHub Repository

You have two options:

**Option A: Using GitHub CLI (Recommended)**
```bash
# Install GitHub CLI if not already installed
# Visit: https://cli.github.com/

# Authenticate
gh auth login

# Create and push repository
gh repo create redditapp --public --source=. --remote=origin --push
```

**Option B: Manual Setup**
1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `redditapp`
3. Don't initialize with README (we already have one)
4. Copy the commands and run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/redditapp.git
git branch -M master
git push -u origin master
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The CI/CD workflow will automatically run on your next push

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Watch the workflow run (should take 2-3 minutes)
3. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/redditapp/
   ```

## 🎯 Alternative: Quick Deploy Now

If you want to deploy right away without waiting for GitHub Actions:

```bash
npm run deploy
```

This will build and deploy to GitHub Pages immediately.

## 📱 Test Your Deployment

After deployment, test these features:

- ✅ Browse posts on the home page
- ✅ Search for posts
- ✅ Filter by different subreddits
- ✅ Change sort order (Hot, New, Top, Rising)
- ✅ Click on a post to view details and comments
- ✅ Test on mobile (resize browser or use DevTools)
- ✅ Check loading states
- ✅ Test error handling (go offline and try to load)

## 🔍 Run Lighthouse Audit

1. Open your deployed site in Chrome
2. Press F12 to open DevTools
3. Click the **Lighthouse** tab
4. Click **Analyze page load**
5. Check your scores (should be 90+ on all except Performance)

## 🎨 Customize for Your Portfolio

Update these files with your information:

1. **README.md**: Add your GitHub username, screenshot, and demo link
2. **package.json**: Update author information
3. **index.html**: Update meta tags if desired

## 🚀 Other Deployment Options

See [DEPLOYMENT.md](./DEPLOYMENT.md) for alternative hosting platforms:
- Netlify (Very easy, free)
- Vercel (Great performance, free)
- Firebase (Google's platform, free tier)

## 📊 Performance Tips

Your app is already optimized, but here are some tips:

1. **Images**: Reddit's images are external, so performance may vary
2. **Caching**: The app uses browser caching for better performance
3. **Code Splitting**: Vite automatically code-splits for optimal loading
4. **Lazy Loading**: Images load as needed

## 🐛 Troubleshooting

### "Permission denied" when pushing to GitHub
- Make sure you're authenticated: `gh auth login`
- Or use SSH keys: [GitHub SSH Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### "gh-pages branch not found" in GitHub Pages settings
- The branch is created on first deployment
- Wait for GitHub Actions to complete
- Refresh the settings page

### 404 Error on deployed site
- Check that the `base` path in `vite.config.js` matches your repository name
- Currently set to `/redditapp/`

### Site loads but styles are broken
- This is usually a base path issue
- Update `vite.config.js` → `base` to match your repo name

## 📚 Next Steps

After deployment:

1. ✅ Share your project!
2. 📱 Add to your portfolio
3. 🔗 Share the link on LinkedIn/Twitter
4. 📊 Monitor with Google Analytics (optional)
5. 🎨 Customize the design to make it your own
6. 🌟 Star the repository!

## 💡 Tips for Your Portfolio

When showcasing this project:

- Highlight the technologies: React, Redux, REST API
- Mention the features: Search, filters, routing
- Show the responsive design
- Talk about state management with Redux
- Demonstrate error handling
- Show the test coverage

## 🎓 What You Built

You've created a production-ready application with:

- ⚛️ Modern React with Hooks
- 🔄 Redux Toolkit for state management
- 🎨 Responsive, accessible design
- 🧪 Unit and E2E tests
- 🚀 CI/CD pipeline
- 📱 Mobile-first approach
- ♿ WCAG-compliant accessibility
- ⚡ Optimized performance

## 🙋 Need Help?

- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guides
- Review [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines
- Open an issue if you encounter problems

## 🎉 Congratulations!

You've built and deployed a professional React application. This is a great addition to your portfolio!

---

**Your deployment URL will be:**
```
https://YOUR_USERNAME.github.io/redditapp/
```

Replace `YOUR_USERNAME` with your GitHub username.

Happy deploying! 🚀

