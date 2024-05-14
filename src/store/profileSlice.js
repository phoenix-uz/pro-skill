import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import Cookies from 'js-cookie'

export const fetchProfileData = createAsyncThunk(
  'profile/fetchProfileData',
  async () => {
    const token = Cookies.get('access_token')
    console.log('token', token);
    try {
      const response = await axios.get('http://185.217.131.110:5000/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
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