import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE } from "./consst";

export const addSms = createAsyncThunk('user/addSms', async(values) => {
    try{
        const response = await fetch( `${API_BASE}/sms`, {
            method: 'POST',
            body: JSON.stringify({
                name: values.name,
                surname: values.surname,
                phoneNumber: values.phone_number,
                sms: values.sms
            }),
            headers: {Accept: 'application/json', 'Content-Type':'application/json'},
        });
        toast.success("SMS muvaffaqiyatli qo'shildi!")
        return console.log(response)
    } catch (error){
        toast.error("SMS qo‘shib bo‘lmadi. Iltimos, yana bir bor urinib ko'ring.");
    }
})



const mainSlice = createSlice({
    name: 'mainData',
    initialState:{
        loading: false,
        data: [],
        error: '',
    },
    extraReducers:builder=>{
        builder.addCase(addSms.pending, state => {
            state.loading = true
            state.error=''
        });
        builder.addCase(addSms.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.data = []
        });
        builder.addCase(addSms.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        });
    }
})

export default mainSlice.reducer; 