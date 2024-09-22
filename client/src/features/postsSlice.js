import { createSlice } from '@reduxjs/toolkit';
import data from "../mockData/mock-posts.json";
//Axios
//createAsyncThunk


const initialState = {
  posts: [],
  loading: false,
  error: null
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => { //It will have cases for the promise (when fetching with axios) in extraReducers?
      return data.posts
    },
  },
})

// Action creators are generated for each case reducer function
export const { getPosts } = postsSlice.actions

export default postsSlice.reducer