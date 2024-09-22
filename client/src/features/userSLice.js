import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isValidated: false,
  userId: "",
  userName: "",
  profile_picture: "",
  email: "",
  dateLogin: "",
  signedIn: "",
  posts: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      return { ...state, isValidated: true }
    },
    logOut: (state) => {
      return { ...state, isValidated: false }
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer