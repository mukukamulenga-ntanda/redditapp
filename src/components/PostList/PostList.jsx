import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../features/posts/postsSlice'
import PostCard from '../PostCard/PostCard'
import './PostList.css'

const PostList = () => {
  const posts = useSelector(selectAllPosts)

  if (posts.length === 0) {
    return (
      <div className="no-posts">
        <div className="no-posts-icon">📭</div>
        <h2>No posts found</h2>
        <p>Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostCard 
          key={post.id} 
          post={post}
          style={{ animationDelay: `${index * 50}ms` }}
        />
      ))}
    </div>
  )
}

export default PostList

