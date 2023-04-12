import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRocketData = createAsyncThunk(
  'rocketSlice/fetchRocketData',
  async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const rocketSlice = createSlice({
  name: 'rocketSlice',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketData.pending, (state) => {
        /* eslint no-param-reassign: "error" */
        state.data = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRocketData.rejected, (state, action) => {
        /* eslint no-param-reassign: "error" */
        state.data = null;
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(fetchRocketData.fulfilled, (state, action) => {
        /* eslint no-param-reassign: "error" */
        state.data = action.payload;
        console.log(action.payload);
        state.error = null;
        state.loading = false;
      });
  },
});

export default rocketSlice.reducer;
