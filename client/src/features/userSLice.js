import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  error: "",
  isValidated: false,
  user: {
    _id: "",
    username: "",
    email: "",
    profile_picture: "",
    posts: [],
  },
  postUser: {
    _id: "",
    username: "",
    email: "",
    profile_picture: "",
    posts: [],
  },
}

//login
export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify({ username, password }),
        credentials: 'include', 
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

//login with Cookie
export const loginAuto = createAsyncThunk(
  'user/loginAuto',
  async ( thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/loginAuto', {
        method: "GET",
        credentials: 'include', 
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
      const response = await fetch('http://localhost:3000/register', {
        method: "POST",
        body: JSON.stringify(user),
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData.error || 'Unexpected server error');
      }
      const data = await response.json();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const logout = createAsyncThunk(
  'user/logout',
  async (thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/logout', {
        method: "GET",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Session couldn\'t be closed');
      }
      const data = await response.json();
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

//fetch a user by ID
export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user. Please check the ID.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    invalidate () {
      return { ...initialState }
    },
  },
  extraReducers: builder => {

    //LOGIN
    builder.addCase(login.pending, state => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isValidated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = ''
    })
    builder.addCase(login.rejected, (state, action) => {
      state.isValidated = false;
      state.loading = false;
      state.user = {};
      state.error = action.payload
    })
    
    //LOGINAUTO
    builder.addCase(loginAuto.pending, state => {
      state.loading = true
    })
    builder.addCase(loginAuto.fulfilled, (state, action) => {
      state.isValidated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = ''
    })
    builder.addCase(loginAuto.rejected, (state, action) => {
      state.isValidated = false;
      state.loading = false;
      state.user = {};
      state.error = action.payload
    })
 
    //LOGOUT
    builder.addCase(logout.pending, state => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isValidated = false;
      state.loading = false;
      state.user = {};
      state.error = ''
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.isValidated = false;
      state.loading = false;
      state.user = action.payload;
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


    //FETCH USER BY ID
    builder.addCase(fetchUserById.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.postUser = action.payload;
    })
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    })

  }
})

export default userSlice.reducer;


export const { invalidate } = userSlice.actions

