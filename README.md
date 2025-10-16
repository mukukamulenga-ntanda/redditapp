# Reddit Client

A beautiful, fast, and responsive Reddit client built with React and Redux. Browse posts, search content, view comments, and explore subreddits with an elegant user interface.

[![CI/CD Pipeline](https://github.com/yourusername/reddit-client/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/yourusername/reddit-client/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🔗 **[Live Demo](https://yourusername.github.io/reddit-client/)**

## 📸 Screenshots

### Desktop View
![Desktop Home](./docs/screenshots/desktop-home.png)
![Desktop Post Detail](./docs/screenshots/desktop-detail.png)

### Mobile View
![Mobile Home](./docs/screenshots/mobile-home.png)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations and transitions
- 🔍 **Search Functionality** - Search across all of Reddit or within specific subreddits
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Filter & Sort** - Filter by subreddit and sort by Hot, New, Top, or Rising
- 💬 **Comments** - View nested comments with proper threading
- ⚡ **Fast Performance** - Optimized for speed with lazy loading and efficient rendering
- 🎭 **Error Handling** - Graceful error states with retry functionality
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- 🌐 **PWA Ready** - Can be installed as a Progressive Web App
- 🚀 **CI/CD Pipeline** - Automated testing and deployment

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

## 🛠️ Technologies Used

### Core
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Build & Development
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### Testing
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing

### Deployment & CI/CD
- **GitHub Actions** - Continuous integration and deployment
- **GitHub Pages** - Hosting

### APIs
- **Reddit JSON API** - Data source

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/reddit-client.git
cd reddit-client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Lint code

## 🧪 Testing

### Unit Tests
Unit tests are written using Vitest and React Testing Library:
```bash
npm test
```

### End-to-End Tests
E2E tests use Playwright and test across multiple browsers:
```bash
npm run test:e2e
```

Tests include:
- Component rendering and interaction
- Navigation and routing
- Search functionality
- Filter and sort operations
- Responsive behavior
- Error states and recovery

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

## 🎨 Design System

### Colors
- **Primary Orange**: `#FF4500` - Reddit's signature color
- **Primary Blue**: `#0079D3` - Links and accents
- **Dark**: `#1A1A1B` - Text and headers
- **Gray**: `#818384` - Secondary text
- **Light Gray**: `#DAE0E6` - Borders
- **Background**: `#F8F9FA` - Page background
- **Card**: `#FFFFFF` - Component backgrounds

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Sizes**: xs(0.75rem), sm(0.875rem), md(1rem), lg(1.125rem), xl(1.5rem)

### Animations
- Fade in on page load
- Slide up for cards and components
- Smooth transitions (150-350ms)
- Hover effects with scale and shadow

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance (WCAG AA)

## 🌟 Future Enhancements

- [ ] User authentication
- [ ] Voting functionality (upvote/downvote)
- [ ] Save and favorite posts
- [ ] Dark mode toggle
- [ ] Infinite scroll for posts
- [ ] Image gallery for multi-image posts
- [ ] Video player integration
- [ ] Comment reply functionality
- [ ] Share to social media
- [ ] Offline support with service workers
- [ ] Custom domain deployment

## 📊 Lighthouse Scores

Target scores (all 90+):
- ✅ Performance: 95+
- ✅ Accessibility: 100
- ✅ Best Practices: 100
- ✅ SEO: 100
- ✅ PWA: Ready

*Note: Performance may vary based on Reddit's media delivery*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Reddit for providing the public JSON API
- Codecademy for the project inspiration
- The React and Redux communities for excellent documentation

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/reddit-client](https://github.com/yourusername/reddit-client)

---

Made with ❤️ and React

