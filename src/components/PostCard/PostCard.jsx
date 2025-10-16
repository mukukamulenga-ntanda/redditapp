import { Link } from 'react-router-dom'
import { formatDistanceToNow } from '../../utils/dateUtils'
import { formatNumber } from '../../utils/numberUtils'
import './PostCard.css'

const PostCard = ({ post, style }) => {
  const {
    id,
    title,
    author,
    subreddit_name_prefixed,
    created_utc,
    score,
    num_comments,
    thumbnail,
    url,
    is_video,
    post_hint,
    preview,
    selftext,
  } = post

  // Determine if post has media
  const hasImage = post_hint === 'image' && thumbnail && thumbnail !== 'self' && thumbnail !== 'default'
  const hasVideo = is_video
  const hasPreview = preview?.images?.[0]?.source?.url

  // Get image URL
  const getImageUrl = () => {
    if (hasImage && hasPreview) {
      return preview.images[0].source.url.replace(/&amp;/g, '&')
    }
    return thumbnail && thumbnail !== 'self' && thumbnail !== 'default' ? thumbnail : null
  }

  const imageUrl = getImageUrl()

  return (
    <article className="post-card" style={style}>
      <div className="post-votes">
        <button className="vote-button" aria-label="Upvote">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3l7 7h-4v7H7v-7H3l7-7z" />
          </svg>
        </button>
        <span className="vote-count">{formatNumber(score)}</span>
        <button className="vote-button" aria-label="Downvote">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 17l-7-7h4V3h6v7h4l-7 7z" />
          </svg>
        </button>
      </div>

      <div className="post-content">
        <div className="post-header">
          <Link to={`/r/${subreddit_name_prefixed}`} className="subreddit-link">
            {subreddit_name_prefixed}
          </Link>
          <span className="post-meta">
            • Posted by u/{author} • {formatDistanceToNow(created_utc)}
          </span>
        </div>

        <Link to={`/post/${id}`} className="post-title-link">
          <h2 className="post-title">{title}</h2>
        </Link>

        {selftext && selftext.length > 0 && (
          <p className="post-text">
            {selftext.length > 200 ? `${selftext.substring(0, 200)}...` : selftext}
          </p>
        )}

        {imageUrl && !hasVideo && (
          <div className="post-media">
            <img
              src={imageUrl}
              alt=""
              className="post-image"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        )}

        {hasVideo && (
          <div className="post-media">
            <div className="video-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Video Post</span>
            </div>
          </div>
        )}

        <div className="post-footer">
          <Link to={`/post/${id}`} className="post-action">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            {formatNumber(num_comments)} Comments
          </Link>

          <button className="post-action" aria-label="Share">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="post-action"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Link
          </a>
        </div>
      </div>
    </article>
  )
}

export default PostCard

