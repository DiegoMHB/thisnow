import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coords: [0, 0],
  loading: false,
  error: null,
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    getCoordsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCoordsSuccess: (state, action) => {
      state.coords = action.payload;
      state.loading = false;
    },
    getCoordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCoordsStart, getCoordsSuccess, getCoordsFailure } = mapSlice.actions;

export const getCoords = () => (dispatch) => {
  dispatch(getCoordsStart());
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const res = [position.coords.latitude, position.coords.longitude];
      dispatch(getCoordsSuccess(res));
    },
    (error) => {
      console.error("No location found:", error);
      dispatch(getCoordsFailure(error.message));
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

export default mapSlice.reducer;