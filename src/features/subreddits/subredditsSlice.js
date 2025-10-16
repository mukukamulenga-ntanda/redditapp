import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPopularSubreddits, searchSubreddits } from '../../api/reddit'

const initialState = {
  subreddits: [],
  status: 'idle',
  error: null,
}

// Async thunks
export const loadPopularSubreddits = createAsyncThunk(
  'subreddits/loadPopular',
  async () => {
    const subreddits = await fetchPopularSubreddits()
    return subreddits
  }
)

export const searchSubredditsByName = createAsyncThunk(
  'subreddits/search',
  async (query) => {
    const subreddits = await searchSubreddits(query)
    return subreddits
  }
)

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    clearSubredditsError: (state) => {
      state.error = null
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      // Load popular subreddits
      .addCase(loadPopularSubreddits.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadPopularSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.subreddits = action.payload
      })
      .addCase(loadPopularSubreddits.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Search subreddits
      .addCase(searchSubredditsByName.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(searchSubredditsByName.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.subreddits = action.payload
      })
      .addCase(searchSubredditsByName.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { clearSubredditsError } = subredditsSlice.actions

// Selectors
export const selectAllSubreddits = (state) => state.subreddits.subreddits
export const selectSubredditsStatus = (state) => state.subreddits.status
export const selectSubredditsError = (state) => state.subreddits.error

export default subredditsSlice.reducer

