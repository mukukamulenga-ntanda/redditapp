import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadComments,
  selectCommentsByPostId,
} from '../../features/comments/commentsSlice'
import { selectAllPosts } from '../../features/posts/postsSlice'
import CommentList from '../../components/CommentList/CommentList'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { formatDistanceToNow } from '../../utils/dateUtils'
import { formatNumber } from '../../utils/numberUtils'
import './PostDetail.css'

const PostDetail = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const posts = useSelector(selectAllPosts)
  const post = posts.find(p => p.id === postId)
  const commentsData = useSelector(selectCommentsByPostId(postId))
  const { comments, status, error } = commentsData

  useEffect(() => {
    if (post) {
      dispatch(loadComments({ postId: post.id, permalink: post.permalink }))
    }
  }, [dispatch, post])

  const handleRetry = () => {
    if (post) {
      dispatch(loadComments({ postId: post.id, permalink: post.permalink }))
    }
  }

  if (!post) {
    return (
      <div className="container post-detail-container">
        <ErrorMessage 
          message="Post not found. Please go back and select a post."
          onRetry={() => navigate('/')}
        />
      </div>
    )
  }

  const {
    title,
    author,
    subreddit_name_prefixed,
    created_utc,
    score,
    num_comments,
    selftext,
    url,
    is_video,
    post_hint,
    preview,
  } = post

  const hasImage = post_hint === 'image' && preview?.images?.[0]?.source?.url
  const imageUrl = hasImage ? preview.images[0].source.url.replace(/&amp;/g, '&') : null

  return (
    <div className="container post-detail-container">
      <button className="back-button" onClick={() => navigate('/')}>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Posts
      </button>

      <article className="post-detail">
        <div className="post-detail-header">
          <div className="post-detail-meta">
            <span className="subreddit-badge">{subreddit_name_prefixed}</span>
            <span className="post-author">Posted by u/{author}</span>
            <span className="post-time">{formatDistanceToNow(created_utc)}</span>
          </div>

          <h1 className="post-detail-title">{title}</h1>

          <div className="post-detail-stats">
            <div className="stat">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3l7 7h-4v7H7v-7H3l7-7z" />
              </svg>
              {formatNumber(score)} upvotes
            </div>
            <div className="stat">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              {formatNumber(num_comments)} comments
            </div>
          </div>
        </div>

        {selftext && (
          <div className="post-detail-content">
            <p className="post-detail-text">{selftext}</p>
          </div>
        )}

        {imageUrl && !is_video && (
          <div className="post-detail-media">
            <img src={imageUrl} alt={title} className="post-detail-image" />
          </div>
        )}

        {is_video && (
          <div className="post-detail-media">
            <div className="video-notice">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p>Video content - <a href={url} target="_blank" rel="noopener noreferrer">Watch on Reddit</a></p>
            </div>
          </div>
        )}

        <div className="post-detail-actions">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="external-link-button"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            View on Reddit
          </a>
        </div>
      </article>

      <section className="comments-section">
        <h2 className="comments-title">
          Comments ({formatNumber(num_comments)})
        </h2>

        {status === 'loading' && <LoadingSpinner />}
        
        {status === 'failed' && (
          <ErrorMessage 
            message={error || 'Failed to load comments'} 
            onRetry={handleRetry}
          />
        )}
        
        {status === 'succeeded' && <CommentList comments={comments} />}
      </section>
    </div>
  )
}

export default PostDetail

