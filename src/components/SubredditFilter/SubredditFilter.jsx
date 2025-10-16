import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentSubreddit,
  loadPosts,
  selectCurrentSubreddit,
  selectSortBy,
  selectTimeFilter,
} from '../../features/posts/postsSlice'
import {
  selectAllSubreddits,
  selectSubredditsStatus,
} from '../../features/subreddits/subredditsSlice'
import './SubredditFilter.css'

const SubredditFilter = () => {
  const dispatch = useDispatch()
  const currentSubreddit = useSelector(selectCurrentSubreddit)
  const subreddits = useSelector(selectAllSubreddits)
  const subredditsStatus = useSelector(selectSubredditsStatus)
  const sortBy = useSelector(selectSortBy)
  const timeFilter = useSelector(selectTimeFilter)

  const handleSubredditChange = (subreddit) => {
    dispatch(setCurrentSubreddit(subreddit))
    dispatch(loadPosts({ subreddit, sort: sortBy, time: timeFilter }))
  }

  return (
    <div className="subreddit-filter">
      <h2 className="filter-title">Subreddits</h2>
      
      <div className="subreddit-list">
        <button
          className={`subreddit-item ${currentSubreddit === 'popular' ? 'active' : ''}`}
          onClick={() => handleSubredditChange('popular')}
        >
          <span className="subreddit-icon">🔥</span>
          <span className="subreddit-name">Popular</span>
        </button>
        
        <button
          className={`subreddit-item ${currentSubreddit === 'all' ? 'active' : ''}`}
          onClick={() => handleSubredditChange('all')}
        >
          <span className="subreddit-icon">🌐</span>
          <span className="subreddit-name">All</span>
        </button>

        {subredditsStatus === 'succeeded' && subreddits.length > 0 && (
          <>
            <div className="subreddit-divider"></div>
            {subreddits.slice(0, 15).map((subreddit) => (
              <button
                key={subreddit.id}
                className={`subreddit-item ${
                  currentSubreddit === subreddit.display_name ? 'active' : ''
                }`}
                onClick={() => handleSubredditChange(subreddit.display_name)}
              >
                {subreddit.icon_img || subreddit.community_icon ? (
                  <img
                    src={subreddit.icon_img || subreddit.community_icon.split('?')[0]}
                    alt=""
                    className="subreddit-avatar"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : (
                  <span className="subreddit-icon">📱</span>
                )}
                <span className="subreddit-name">r/{subreddit.display_name}</span>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default SubredditFilter

