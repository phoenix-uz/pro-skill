import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import { API_BASE } from './consst';

export const fetchProfileData = createAsyncThunk(
  'profile/fetchProfileData',
  async () => {
    const token = Cookies.get('access_token')
    try {
      const response = await axios.get(`${API_BASE}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error('Foydalanuvchi maʼlumotlarini olishda xatolik yuz berdi:', error);
      throw error;
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;