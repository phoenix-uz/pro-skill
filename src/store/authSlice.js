import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from 'js-cookie'
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE } from "./consst";

export const registrationForm = createAsyncThunk('user/register', async(values) => {
    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber.replace(/[^\d+]/g, ""),
            gender: values.gender,
            city: values.city,
            birthday: values.birthday,
            password: values.password,
          }),
          
        });
        Cookies.set("phoneNumber", values.phoneNumber);
        localStorage.setItem('phoneNumber', values.phoneNumber);
        const data = await response.json();
        return(data)
      } catch (error) {
        toast.error("Nimadir noto'g'ri bajarildi")
        throw new Error(error);
      }
})

export const sendOtp = createAsyncThunk('user/otp', async(code) => {
    try{
        const phoneNumber = Cookies.get('phoneNumber');
        if (!phoneNumber) {
            throw new Error('Telefon raqami topilmadi');
        }
        const response = await axios.post(`${API_BASE}/auth/verify-phone-code`, {
            phoneNumber:  phoneNumber.replace(/[^\d+]/g, ""),
            code : code.join('')
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            if(res.status === 200 || res.status === 201) {
            Cookies.set('access_token', res.access_token,{ expires: 1 });
            return res;
            } else {
                throw new Error('autent emas')
            }
        })
        toast.success("Muvaffaqiyatli roʻyxatdan oʻtkazildi")
        return response.data;
    } catch (error) {
        toast.error("Nimadir noto'g'ri bajarildi")
        throw new Error(error);
    }
})

export const loginForm = createAsyncThunk('user/login', async(values) => {
    try{
        const response = await axios.post(`${API_BASE}/auth/login`, {
            phoneNumber:  values.phoneNumber.replace(/[^\d+]/g, ""),
            password : values.password
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            if(res.status === 200 || res.status === 201) {
                Cookies.set('access_token', res.data.access_token,{ expires: 1 });
                return res;
            } else {
                throw new Error('login emas')
            }
        })
        toast.success('Muvaffaqiyatli tizimga kiring')
        return response.data;
    } catch (error) {
        toast.error("Nimadir noto'g'ri bajarildi")
        throw new Error(error);
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading: false,
        auth: [],
        isAuthenticated: false,
        token: Cookies.get('access_token') || null,
        // isLogined: Cookies.get('access_token') ? true : false,
        error: '',
    },
    extraReducers:builder=>{
        builder.addCase(registrationForm.pending, state => {
            state.loading = true
            state.error=''
        })
        builder.addCase(registrationForm.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
        });
        builder.addCase(registrationForm.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });

        builder.addCase(sendOtp.pending, (state) => {
            state.isAuthenticated = false
            state.error = null;
        })
        builder.addCase(sendOtp.fulfilled, (state) => {
            console.log('accepted')
            state.isAuthenticated = true
            state.error = null;
        })
        builder.addCase(sendOtp.rejected, (state, action) => {
            console.log("not accepted")
            state.isAuthenticated = false
            state.error = action.error.message || 'Failed to send OTP';
        });

        builder.addCase(loginForm.pending, state => {
            state.loading = true
            state.isAuthenticated = false
            state.error=''
        });
        builder.addCase(loginForm.fulfilled, (state, action) => {
            state.loading = false
            state.isAuthenticated = true
            state.error = null
        });
        builder.addCase(loginForm.rejected, (state, action) => {
            state.loading = false
            state.isAuthenticated = false
            state.error = action.error.message
        });
    }
})



export default authSlice.reducer; 