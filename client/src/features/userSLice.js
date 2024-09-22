import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isValidated: false,
  user: {
  userId: "1",
  username: "Juan Perez",
  email: "juanperez@example.com",
  profile_picture: "/pics/1.jpg",
  dateLogin: "12/03/23",
  posts: ["101", "111", "121"],
  }
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