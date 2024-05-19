
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE } from './consst';

export const fetchLibraryWithItemsData = createAsyncThunk(
  'libraryWithItems/fetchData',
  async () => {
    const response = await axios.get(`${API_BASE}/library/withItems`);
    return response.data;
  }
);

const libraryWithItemsSlice = createSlice({
  name: 'libraryWithItems',
  initialState:{
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibraryWithItemsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLibraryWithItemsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLibraryWithItemsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default libraryWithItemsSlice.reducer;