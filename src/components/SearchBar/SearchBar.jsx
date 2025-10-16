import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  searchRedditPosts, 
  clearSearch,
  setSearchQuery,
  selectSearchQuery,
  selectCurrentSubreddit 
} from '../../features/posts/postsSlice'
import './SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectSearchQuery)
  const currentSubreddit = useSelector(selectCurrentSubreddit)
  const [localQuery, setLocalQuery] = useState(searchQuery)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (localQuery.trim()) {
      dispatch(setSearchQuery(localQuery))
      dispatch(searchRedditPosts({ 
        query: localQuery, 
        subreddit: currentSubreddit !== 'popular' ? currentSubreddit : null 
      }))
    }
  }

  const handleClear = () => {
    setLocalQuery('')
    dispatch(clearSearch())
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <svg 
          className="search-icon" 
          viewBox="0 0 20 20" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
            clipRule="evenodd" 
          />
        </svg>
        
        <input
          type="text"
          className="search-input"
          placeholder="Search Reddit..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          aria-label="Search posts"
        />
        
        {localQuery && (
          <button
            type="button"
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        )}
      </div>
      
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  )
}

export default SearchBar

