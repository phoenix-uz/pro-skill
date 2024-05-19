import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import { API_BASE } from './consst';



export const bookPurchaseData = createAsyncThunk('bookPurchase/bookPurchaseData', async(purchaseBookId) => {
    try{
        const response = await axios.post(`${API_BASE}/item/buy`, {
            itemId:  purchaseBookId,
        }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization' : `Bearer ${ Cookies.get('access_token')}`
            }
        }).then(res => {
            if(res.status === 200 || res.status === 201) {
                return res;
            } else {
                throw new Error('not purchased')
            }
        })
        toast.success('Muvaffaqiyatli sotib olindi')
        return response.data;
    } catch (error) {
        toast.error(`sotib olinmagan `)
    }
})


const bookPurchaseSlice = createSlice({
  name: 'bookPurchase',
  initialState:{
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookPurchaseData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(bookPurchaseData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(bookPurchaseData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookPurchaseSlice.reducer;