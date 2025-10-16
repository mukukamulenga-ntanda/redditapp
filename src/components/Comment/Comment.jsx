import { formatDistanceToNow } from '../../utils/dateUtils'
import { formatNumber } from '../../utils/numberUtils'
import './Comment.css'

const Comment = ({ comment, style, depth = 0 }) => {
  const { author, body, created_utc, score, replies } = comment

  // Parse replies if they exist
  const hasReplies = replies && replies.data && replies.data.children && replies.data.children.length > 0
  const replyComments = hasReplies 
    ? replies.data.children.filter(child => child.data.body && child.data.author)
    : []

  return (
    <div 
      className={`comment ${depth > 0 ? 'comment-nested' : ''}`} 
      style={{
        ...style,
        marginLeft: depth > 0 ? `${Math.min(depth * 20, 60)}px` : '0'
      }}
    >
      <div className="comment-header">
        <span className="comment-author">u/{author}</span>
        <span className="comment-separator">•</span>
        <span className="comment-score">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 3l7 7h-4v7H7v-7H3l7-7z" />
          </svg>
          {formatNumber(score)}
        </span>
        <span className="comment-separator">•</span>
        <span className="comment-time">{formatDistanceToNow(created_utc)}</span>
      </div>

      <div className="comment-body">
        {body}
      </div>

      {replyComments.length > 0 && (
        <div className="comment-replies">
          {replyComments.map((reply, index) => (
            <Comment 
              key={reply.data.id || index} 
              comment={reply.data}
              depth={depth + 1}
              style={{ animationDelay: `${index * 20}ms` }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment

