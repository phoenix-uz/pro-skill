
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE } from './consst';

export const fetchSearchData = createAsyncThunk(
  'libraryWithItems/fetchSearchData',
    async (searchQuery) => {
        if(searchQuery.length < 2 )
            return []
      try {
        const response = await axios.get(`${API_BASE}/item/title/` + searchQuery, {
          headers: {Accept: 'application/json', 'Content-Type':'application/json'},
        });
        return response.data;
      } catch (error) {
        toast.error('Qidiruv maʼlumotlarini olishda xatolik yuz berdi:', error);
        throw error;
      }
    }
)

const searchSlice = createSlice({
  name: 'search',
  initialState:{
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default searchSlice.reducer;