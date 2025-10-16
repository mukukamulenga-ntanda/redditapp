import axios from 'axios'

const BASE_URL = import.meta.env.DEV ? '/api/reddit' : 'https://www.reddit.com'

const redditApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: false,
})
export const fetchPosts = async (subreddit = 'popular', sort = 'hot', time = 'day', limit = 25) => {
  try {
    const endpoint = `/r/${subreddit}/${sort}.json`
    const params = { limit, t: time, raw_json: 1 }
    const response = await redditApi.get(endpoint, { params })
    
    if (!response.data?.data?.children) {
      throw new Error('Invalid response format')
    }
    
    return response.data.data.children.map(child => child.data)
  } catch (error) {
    console.error('Reddit API Error:', error)
    if (error.response) {
      throw new Error(`Reddit API error: ${error.response.status}`)
    } else if (error.request) {
      throw new Error('Cannot connect to Reddit')
    }
    throw new Error(`Failed to fetch posts: ${error.message}`)
  }
}

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

export const fetchComments = async (permalink) => {
  try {
    const response = await redditApi.get(`${permalink}.json`)
    const commentsData = response.data[1].data.children
    return commentsData.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to fetch comments: ${error.message}`)
  }
}

export const fetchPopularSubreddits = async () => {
  try {
    const response = await redditApi.get('/subreddits/popular.json', { params: { limit: 25 } })
    return response.data.data.children.map(child => child.data)
  } catch (error) {
    throw new Error(`Failed to fetch subreddits: ${error.message}`)
  }
}

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

