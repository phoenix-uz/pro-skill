
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLibraryWithItemsData = createAsyncThunk(
  'libraryWithItems/fetchData',
  async () => {
    const response = await axios.get('http://185.217.131.110:5000/library/withItems');
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