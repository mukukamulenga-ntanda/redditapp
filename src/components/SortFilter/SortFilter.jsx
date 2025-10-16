import { useDispatch, useSelector } from 'react-redux'
import {
  setSortBy,
  setTimeFilter,
  loadPosts,
  selectSortBy,
  selectTimeFilter,
  selectCurrentSubreddit,
  selectHasSearched,
} from '../../features/posts/postsSlice'
import './SortFilter.css'

const SortFilter = () => {
  const dispatch = useDispatch()
  const sortBy = useSelector(selectSortBy)
  const timeFilter = useSelector(selectTimeFilter)
  const currentSubreddit = useSelector(selectCurrentSubreddit)
  const hasSearched = useSelector(selectHasSearched)

  const handleSortChange = (newSort) => {
    if (!hasSearched) {
      dispatch(setSortBy(newSort))
      dispatch(loadPosts({ 
        subreddit: currentSubreddit, 
        sort: newSort, 
        time: timeFilter 
      }))
    }
  }

  const handleTimeChange = (e) => {
    const newTime = e.target.value
    dispatch(setTimeFilter(newTime))
    if (!hasSearched && sortBy === 'top') {
      dispatch(loadPosts({ 
        subreddit: currentSubreddit, 
        sort: sortBy, 
        time: newTime 
      }))
    }
  }

  if (hasSearched) {
    return null
  }

  return (
    <div className="sort-filter">
      <div className="sort-buttons">
        <button
          className={`sort-button ${sortBy === 'hot' ? 'active' : ''}`}
          onClick={() => handleSortChange('hot')}
        >
          🔥 Hot
        </button>
        <button
          className={`sort-button ${sortBy === 'new' ? 'active' : ''}`}
          onClick={() => handleSortChange('new')}
        >
          ✨ New
        </button>
        <button
          className={`sort-button ${sortBy === 'top' ? 'active' : ''}`}
          onClick={() => handleSortChange('top')}
        >
          🏆 Top
        </button>
        <button
          className={`sort-button ${sortBy === 'rising' ? 'active' : ''}`}
          onClick={() => handleSortChange('rising')}
        >
          📈 Rising
        </button>
      </div>

      {sortBy === 'top' && (
        <div className="time-filter">
          <label htmlFor="time-select" className="time-label">
            Time:
          </label>
          <select
            id="time-select"
            className="time-select"
            value={timeFilter}
            onChange={handleTimeChange}
          >
            <option value="hour">Past Hour</option>
            <option value="day">Past Day</option>
            <option value="week">Past Week</option>
            <option value="month">Past Month</option>
            <option value="year">Past Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default SortFilter

