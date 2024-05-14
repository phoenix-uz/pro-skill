import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLibraryData = createAsyncThunk(
  'library/fetchData',
  async () => {
    const response = await axios.get('http://185.217.131.110:5000/library');
    
    return response.data;
  }
);

const librarySlice = createSlice({
  name: 'library',
  initialState:{
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibraryData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLibraryData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLibraryData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default librarySlice.reducer;