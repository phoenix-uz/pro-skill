import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addSms = createAsyncThunk('user/addSms', async(values) => {
    return fetch('http://localhost:5000/sms/add-news', {method: 'POST', 
    headers: {Accept: 'application/json', 'Content-Type':'application/json'},
    body: JSON.stringify({
        name: values.name,
        surname: values.surname,
        phone_number: values.phone_number,
        sms: values.sms
    })
}).then((res) => res.json)
})

// export const getLibrary = async (params) => {
//     const response = await fetch('http://localhost:5000/sms/add-news');
//     return await response.json();
// }

export const getLibrary = createAsyncThunk('user/getLibrary', () => {
    return axios
    .get('http://localhost:5000/library')
    .then((res) => res.data)
})
const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading: false,
        user: [],
        error: '',
        isSuccess: ''
    },

    extraReducers:builder=>{
        builder.addCase(addSms.pending, state => {
            state.loading = true
            state.error=''
        });
        builder.addCase(addSms.fulfilled, (state, action) => {
            state.loading = false
            state.user = []
            state.isSuccess = action.payload
        });
        builder.addCase(addSms.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        });


        builder.addCase(getLibrary.pending, state => {
            state.loading = true
        });
        builder.addCase(getLibrary.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        });
        builder.addCase(getLibrary.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer; 