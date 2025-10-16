import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import PostDetail from './pages/PostDetail/PostDetail'
import { loadPopularSubreddits } from './features/subreddits/subredditsSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Load popular subreddits on app mount
    dispatch(loadPopularSubreddits())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

