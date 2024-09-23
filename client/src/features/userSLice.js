import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  error: "",
  isValidated: false,
  user: {
    userId: "",
    username: "",
    email: "",
    profile_picture: "",
    dateLogin: "",
    posts: [],
  }
}

//login
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to login. Please check your credentials.');
      }
      const data = await response.json();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

//new User
export const newUser = createAsyncThunk(
  'user/newUser',
  async (user, thunkAPI) => {
    try {
      console.log('en funcion: ARGUMENTO',user)
      const response = await fetch('http://localhost:3000/register', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        console.log('en funcion: RESPONSE.ERROR', response)
        throw new Error('Failed to create a new user account');
      }
      const data = await response.json();
      console.log('en funcion: RESPONSE', data)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {

    //LOGIN
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isValidated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = ''
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isValidated = false;
      state.loading = false;
      state.user = {};
      state.error = action.payload
    })

    //NEW USER
    builder.addCase(newUser.pending, state => {
      state.loading = true
    })
    builder.addCase(newUser.fulfilled, (state, action) => {
      state.isValidated = true;
      state.loading = false;
      state.error = '';
      state.user = action.payload;
    })
    builder.addCase(newUser.rejected, (state, action) => {
      state.isValidated = false;
      state.loading = false;
      state.error = action.payload
    })

  },

})

export default userSlice.reducer;


// export const { logIn, logOut } = userSlice.actions

