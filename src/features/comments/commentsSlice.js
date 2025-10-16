import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchComments } from '../../api/reddit'

const initialState = {
  commentsByPost: {}, // { postId: { comments: [], status: 'idle', error: null } }
  currentPostId: null,
}

// Async thunk
export const loadComments = createAsyncThunk(
  'comments/loadComments',
  async ({ postId, permalink }) => {
    const comments = await fetchComments(permalink)
    return { postId, comments }
  }
)

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPostId = action.payload
    },
    clearComments: (state, action) => {
      const postId = action.payload
      if (state.commentsByPost[postId]) {
        delete state.commentsByPost[postId]
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state, action) => {
        const postId = action.meta.arg.postId
        state.commentsByPost[postId] = {
          comments: [],
          status: 'loading',
          error: null,
        }
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        const { postId, comments } = action.payload
        state.commentsByPost[postId] = {
          comments,
          status: 'succeeded',
          error: null,
        }
      })
      .addCase(loadComments.rejected, (state, action) => {
        const postId = action.meta.arg.postId
        state.commentsByPost[postId] = {
          comments: [],
          status: 'failed',
          error: action.error.message,
        }
      })
  },
})

export const { setCurrentPost, clearComments } = commentsSlice.actions

// Selectors
export const selectCommentsByPostId = (postId) => (state) => 
  state.comments.commentsByPost[postId] || { comments: [], status: 'idle', error: null }

export const selectCurrentPostId = (state) => state.comments.currentPostId

export default commentsSlice.reducer

