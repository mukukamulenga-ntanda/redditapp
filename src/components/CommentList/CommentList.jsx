import Comment from '../Comment/Comment'
import './CommentList.css'

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="no-comments">
        <div className="no-comments-icon">💬</div>
        <p>No comments yet. Be the first to comment!</p>
      </div>
    )
  }

  // Filter out "more" comments and empty entries
  const validComments = comments.filter(
    comment => comment.body && comment.author && comment.kind !== 'more'
  )

  return (
    <div className="comment-list">
      {validComments.map((comment, index) => (
        <Comment 
          key={comment.id || index} 
          comment={comment}
          style={{ animationDelay: `${index * 30}ms` }}
        />
      ))}
    </div>
  )
}

export default CommentList

