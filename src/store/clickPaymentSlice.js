import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import { API_BASE } from './consst';



export const clickPaymentData = createAsyncThunk('clickPayment/clickPaymentData', async(values) => {

  try{
    const response = await axios.post(`${API_BASE}/click/card`, {
      card_number: values.cardNumber.replace(/[^\d+]/g, ""),
      expire_date: values.expireDate.replace(/[^\d+]/g, ""),
    }, {
        headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${ Cookies.get('access_token')}`
        }
    }).then(res => {
        if(res.status === 200 || res.status === 201) {
          Cookies.set("card_number", values.cardNumber.replace(/[^\d+]/g, ""));
          toast.success("succes")
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

export const sendPaymentOtp = createAsyncThunk('clickPayment/sendPaymentOtp', async(otp) => {
  try{
      const cardNumber = Cookies.get('card_number');
      const name = Cookies.get('name')
      const response = await axios.post(`${API_BASE}/click/cardOTP`, {
          sms_code : otp.join('')  ,
          card_number: cardNumber,
          name: name
      }, {
          headers: {
              "Content-Type": "application/json",
              'Authorization' : `Bearer ${ Cookies.get('access_token')}`
          }
      }).then(res => {
          if(res.status === 200 || res.status === 201) {
            toast.success("success")
          return res;
          } else {
              throw new Error('autent emas')
          }
      })
      toast.success("Muvaffaqiyatli roʻyxatdan oʻtkazildi")
      return response.data;
  } catch (error) {
      toast.error("Nimadir noto'g'ri bajarildi")
      console.error(error);
  }
})

const clickPaymentSlice = createSlice({
  name: 'clickPayment',
  initialState:{
    data: [],
    status: 'idle',
    error: null,
    isPurchesed: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(clickPaymentData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(clickPaymentData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(clickPaymentData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(sendPaymentOtp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.isPurchesed = false
      })
      .addCase(sendPaymentOtp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.isPurchesed = true
        state.error = null;
      })
      .addCase(sendPaymentOtp.rejected, (state, action) => {
        state.status = 'failed';
        state.isPurchesed = false
        state.error = action.error.message || 'Failed to send OTP';
      })
  },
});

export default clickPaymentSlice.reducer;