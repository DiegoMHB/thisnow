import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
//Axios
//createAsyncThunk


const initialState = {
  loading: false,
  error: "",
  posts: []
}

//login
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

//new Post
export const newPost = createAsyncThunk(
  'posts/newPost',
  async (post, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/newpost', {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create a new post account');
      }
      const data = await response.json();

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {

    //FETCH POSTS
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = ''
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = {};
      state.error = action.payload
    })

    //NEW POST
    builder.addCase(newPost.pending, state => {
      state.loading = true
    })
    builder.addCase(newPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.posts = [...state.posts, action.payload];
    })
    builder.addCase(newPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    })

  },
})

// Action creators are generated for each case reducer function
export const { getPosts } = postsSlice.actions

export default postsSlice.reducer