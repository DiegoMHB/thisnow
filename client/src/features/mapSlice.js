import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coords : []
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    getCoords : (state) => {
      let res = []
      navigator.geolocation.getCurrentPosition(
        (position) => {
          res = [position.coords.latitude, position.coords.longitude];
        },
        (error) => {
          console.error("No location found:", error);
        },
        {
          enableHighAccuracy: true, //more precission
          timeout: 5000, //set how much is gonna wait to get the coordinades
          maximumAge: 0, //no cache
        }
      );
      return {...state, coords : res}
    },
   
  },
})

export const {getCoords} = mapSlice.actions

export default mapSlice.reducer