# Reddit Client

A modern Reddit browsing experience built with React and Redux. Search posts, explore subreddits, and read comments with a clean, responsive interface.

🔗 **[Live Demo](https://mukukamulenga-ntanda.github.io/redditapp/)**

## 📸 Screenshots

### Desktop View
![Desktop Home](./docs/screenshots/desktop-home.png)
![Desktop Post Detail](./docs/screenshots/desktop-detail.png)

### Mobile View
![Mobile Home](./docs/screenshots/mobile-home.png)

## Features

- Real-time Reddit data from the public API
- Search posts across all subreddits
- Filter by popular subreddits
- Sort by Hot, New, Top, and Rising
- View post details and nested comments
- Fully responsive design
- Error handling with retry options

## 🎯 Wireframes

### Home Page Layout
```
┌─────────────────────────────────────────────────────────┐
│ Header                                                   │
│ ┌─────┐ ┌───────────────────┐ ┌──────────┐            │
│ │Logo │ │  Search Bar       │ │  GitHub  │            │
│ └─────┘ └───────────────────┘ └──────────┘            │
└─────────────────────────────────────────────────────────┘
┌──────────────┬──────────────────────────────────────────┐
│              │ ┌──────────────────────────────────────┐ │
│ Subreddits   │ │ Sort: [Hot][New][Top][Rising]        │ │
│              │ └──────────────────────────────────────┘ │
│ ┌──────────┐ │                                          │
│ │ Popular  │ │ ┌──────────────────────────────────────┐│
│ │ All      │ │ │ Post Card                            ││
│ │──────────│ │ │ • Votes  Title                       ││
│ │ r/react  │ │ │ • Author Subreddit Time              ││
│ │ r/prog.. │ │ │ • Content/Image                      ││
│ │ r/tech   │ │ │ • Comments Share Link                ││
│ └──────────┘ │ └──────────────────────────────────────┘│
│              │                                          │
│              │ ┌──────────────────────────────────────┐│
│              │ │ Post Card                            ││
│              │ └──────────────────────────────────────┘│
└──────────────┴──────────────────────────────────────────┘
```

### Post Detail Page Layout
```
┌─────────────────────────────────────────────────────────┐
│ ┌────────────────┐                                      │
│ │ ← Back to Posts│                                      │
│ └────────────────┘                                      │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐│
│ │ r/subreddit • Posted by u/author • 2 hours ago       ││
│ │                                                       ││
│ │ Post Title                                           ││
│ │                                                       ││
│ │ ⬆ 1.2k upvotes   💬 245 comments                     ││
│ │                                                       ││
│ │ Post content text here...                            ││
│ │                                                       ││
│ │ [Image/Video if present]                             ││
│ │                                                       ││
│ │ [View on Reddit]                                     ││
│ └──────────────────────────────────────────────────────┘│
│                                                          │
│ ┌──────────────────────────────────────────────────────┐│
│ │ Comments (245)                                       ││
│ │ ───────────────────────────────────────────────      ││
│ │                                                       ││
│ │ u/user1 • 1 hour ago • ⬆ 45                         ││
│ │ Comment text here...                                 ││
│ │                                                       ││
│ │   u/user2 • 30 min ago • ⬆ 12 (nested)             ││
│ │   Reply comment text...                              ││
│ └──────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────┘
```

### Mobile View (375px)
```
┌──────────────────┐
│ 🔴 [Search....] │
└──────────────────┘
┌──────────────────┐
│ Subreddits Grid  │
│ [Pop] [All] [r/] │
└──────────────────┘
┌──────────────────┐
│ [Hot][New][Top]  │
└──────────────────┘
┌──────────────────┐
│ ⬆ Title          │
│ 1k Author • Time │
│ [Image]          │
│ 💬 45 Share Link │
└──────────────────┘
```

## Tech Stack

- React 18 & Redux Toolkit
- React Router
- Axios for API calls
- Vite for build tooling
- Vitest & Playwright for testing
- Reddit JSON API

## Getting Started

```bash
git clone https://github.com/mukukamulenga-ntanda/redditapp.git
cd redditapp
npm install
npm run dev
```

Open `http://localhost:5173/redditapp/` in your browser.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm test         # Run tests
npm run test:e2e # End-to-end tests
```

## 📦 Project Structure

```
reddit-client/
├── e2e/                    # End-to-end tests
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   └── reddit-icon.svg    # App icon
├── src/
│   ├── api/               # API integration
│   │   └── reddit.js      # Reddit API client
│   ├── app/               # Redux store
│   │   └── store.js       # Store configuration
│   ├── components/        # Reusable components
│   │   ├── Comment/
│   │   ├── CommentList/
│   │   ├── ErrorMessage/
│   │   ├── Header/
│   │   ├── LoadingSpinner/
│   │   ├── PostCard/
│   │   ├── PostList/
│   │   ├── SearchBar/
│   │   ├── SortFilter/
│   │   ├── SubredditFilter/
│   │   └── __tests__/     # Component tests
│   ├── features/          # Redux slices
│   │   ├── posts/
│   │   ├── comments/
│   │   └── subreddits/
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   └── PostDetail/
│   ├── utils/             # Utility functions
│   │   ├── dateUtils.js
│   │   ├── numberUtils.js
│   │   └── __tests__/     # Utility tests
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .github/
│   └── workflows/
│       └── ci-cd.yml      # CI/CD pipeline
├── package.json
├── vite.config.js
├── playwright.config.js
└── README.md
```

## Design

The app uses Reddit's color scheme with smooth animations and transitions. Built with accessibility in mind using semantic HTML and ARIA labels.

## License

MIT License - see [LICENSE](LICENSE) for details.

