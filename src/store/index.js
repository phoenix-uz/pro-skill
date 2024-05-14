import { configureStore } from "@reduxjs/toolkit"
import mainSlice from "./mainSlice"
import authSlice from "./authSlice"
import librarySlice from "./librarySlice"
import libraryWithItemsSlice from "./libraryWithItemsSlice"
import profileSlice from "./profileSlice"
import searchSlice from "./searchSlice"

export const store = configureStore({
    reducer:{
        auth: authSlice,
        main: mainSlice,
        library: librarySlice,
        libraryWithItems: libraryWithItemsSlice,
        profile: profileSlice,
        search: searchSlice
    }
})