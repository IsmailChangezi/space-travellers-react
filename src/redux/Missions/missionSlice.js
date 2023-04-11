import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://api.spacexdata.com/v3/missions";
export const fetchMissionData = createAsyncThunk(
  "mission/fetchMissionData",
  async () => {
    try {
      fetch(url).then((res) => {
        data = res.json();
        return data;
      });
    } catch (err) {
      return err;
    }
  }
);

const missionSlice = createSlice({
  name: "mission",
  initialState: {
    loading: true,
    error: false,
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionData.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMissionData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchMissionData.rejected, (state) => {
        state.data = null;
        state.error = true;
        state.loading = false;
      });
  },
});

export default missionSlice.reducer;
