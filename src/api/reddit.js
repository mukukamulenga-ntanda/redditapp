import axios from 'axios'

const BASE_URL = 'https://www.reddit.com'

// Create axios instance with default config
const redditApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Fetch posts from a subreddit
 * @param {string} subreddit - The subreddit name (default: 'popular')
 * @param {string} sort - Sort type: hot, new, top, rising
 * @param {string} time - Time filter for top: hour, day, week, month, year, all
 * @param {number} limit - Number of posts to fetch
 */
export const fetchPosts = async (subreddit = 'popular', sort = 'hot', time = 'day', limit = 25) => {
  try {
    const endpoint = `/r/${subreddit}/${sort}.json`
    const params = { limit, t: time }
    const response = await redditApi.get(endpoint, { params })
    return response.data.data.children.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error.message}`)
  }
}

/**
 * Search Reddit posts
 * @param {string} query - Search query
 * @param {string} subreddit - Limit search to subreddit (optional)
 * @param {string} sort - Sort: relevance, hot, top, new, comments
 * @param {string} time - Time filter: hour, day, week, month, year, all
 */
export const searchPosts = async (query, subreddit = null, sort = 'relevance', time = 'all') => {
  try {
    const endpoint = subreddit ? `/r/${subreddit}/search.json` : '/search.json'
    const params = { 
      q: query, 
      sort,
      t: time,
      limit: 50,
      restrict_sr: subreddit ? 'true' : 'false'
    }
    const response = await redditApi.get(endpoint, { params })
    return response.data.data.children.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to search posts: ${error.message}`)
  }
}

/**
 * Fetch comments for a specific post
 * @param {string} permalink - The post's permalink
 */
export const fetchComments = async (permalink) => {
  try {
    const response = await redditApi.get(`${permalink}.json`)
    // Response contains [post, comments]
    const commentsData = response.data[1].data.children
    return commentsData.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to fetch comments: ${error.message}`)
  }
}

/**
 * Fetch popular subreddits
 */
export const fetchPopularSubreddits = async () => {
  try {
    const response = await redditApi.get('/subreddits/popular.json', { params: { limit: 25 } })
    return response.data.data.children.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to fetch subreddits: ${error.message}`)
  }
}

/**
 * Search subreddits
 * @param {string} query - Search query
 */
export const searchSubreddits = async (query) => {
  try {
    const response = await redditApi.get('/subreddits/search.json', { 
      params: { q: query, limit: 10 }
    })
    return response.data.data.children.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to search subreddits: ${error.message}`)
  }
}

export default {
  fetchPosts,
  searchPosts,
  fetchComments,
  fetchPopularSubreddits,
  searchSubreddits,
}

