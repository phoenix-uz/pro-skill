import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

export const addSms = createAsyncThunk('user/addSms', async(values) => {
    try{
        const response = await fetch( `http://185.217.131.110:5000/sms`, {
            method: 'POST',
            body: JSON.stringify({
                name: values.name,
                surname: values.surname,
                phone_number: values.phone_number,
                sms: values.sms
            }),
            headers: {Accept: 'application/json', 'Content-Type':'application/json'},
        });
        toast.success('SMS successfully added!')
        return console.log(response)
    } catch (error){
        toast.error('Failed to add SMS. Please try again.');
        console.log(error);
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

        // builder.addCase(fetchLibraryData.pending, state => {
        //     state.loading = true
        // });
        // builder.addCase(fetchLibraryData.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.data = action.payload
        // });
        // builder.addCase(fetchLibraryData.rejected, (state, action) => {
        //     state.loading = false
        //     state.error = action.error.message
        // })
    }
})

export default mainSlice.reducer; 