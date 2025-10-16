import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SubredditFilter from '../../components/SubredditFilter/SubredditFilter'
import SortFilter from '../../components/SortFilter/SortFilter'
import PostList from '../../components/PostList/PostList'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import {
  loadPosts,
  selectPostsStatus,
  selectPostsError,
  selectCurrentSubreddit,
  selectSortBy,
  selectTimeFilter,
  selectHasSearched,
  clearError,
} from '../../features/posts/postsSlice'
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectPostsStatus)
  const error = useSelector(selectPostsError)
  const currentSubreddit = useSelector(selectCurrentSubreddit)
  const sortBy = useSelector(selectSortBy)
  const timeFilter = useSelector(selectTimeFilter)
  const hasSearched = useSelector(selectHasSearched)

  useEffect(() => {
    // Only load posts if not currently showing search results
    if (!hasSearched) {
      dispatch(loadPosts({ 
        subreddit: currentSubreddit, 
        sort: sortBy, 
        time: timeFilter 
      }))
    }
  }, [dispatch, currentSubreddit, sortBy, timeFilter, hasSearched])

  const handleRetry = () => {
    dispatch(clearError())
    dispatch(loadPosts({ 
      subreddit: currentSubreddit, 
      sort: sortBy, 
      time: timeFilter 
    }))
  }

  return (
    <div className="home container">
      <div className="sidebar">
        <SubredditFilter />
      </div>
      
      <div className="main-section">
        <SortFilter />
        
        {status === 'loading' && <LoadingSpinner />}
        
        {status === 'failed' && (
          <ErrorMessage 
            message={error || 'Failed to load posts'} 
            onRetry={handleRetry}
          />
        )}
        
        {status === 'succeeded' && <PostList />}
      </div>
    </div>
  )
}

export default Home

