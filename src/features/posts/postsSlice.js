import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPosts, searchPosts } from '../../api/reddit'

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  currentSubreddit: 'popular',
  sortBy: 'hot',
  timeFilter: 'day',
  searchQuery: '',
  hasSearched: false,
}

// Async thunks
export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async ({ subreddit, sort, time }) => {
    const posts = await fetchPosts(subreddit, sort, time)
    return posts
  }
)

export const searchRedditPosts = createAsyncThunk(
  'posts/searchPosts',
  async ({ query, subreddit }) => {
    const posts = await searchPosts(query, subreddit)
    return posts
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setTimeFilter: (state, action) => {
      state.timeFilter = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    clearSearch: (state) => {
      state.searchQuery = ''
      state.hasSearched = false
    },
    clearError: (state) => {
      state.error = null
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      // Load posts
      .addCase(loadPosts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
        state.hasSearched = false
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Search posts
      .addCase(searchRedditPosts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(searchRedditPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
        state.hasSearched = true
      })
      .addCase(searchRedditPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { 
  setCurrentSubreddit, 
  setSortBy, 
  setTimeFilter, 
  setSearchQuery,
  clearSearch,
  clearError 
} = postsSlice.actions

// Selectors
export const selectAllPosts = (state) => state.posts.posts
export const selectPostsStatus = (state) => state.posts.status
export const selectPostsError = (state) => state.posts.error
export const selectCurrentSubreddit = (state) => state.posts.currentSubreddit
export const selectSortBy = (state) => state.posts.sortBy
export const selectTimeFilter = (state) => state.posts.timeFilter
export const selectSearchQuery = (state) => state.posts.searchQuery
export const selectHasSearched = (state) => state.posts.hasSearched

export default postsSlice.reducer

