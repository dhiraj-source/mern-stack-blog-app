import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './authSlices'

export const store = configureStore({
    reducer: {
        authSlice: authSliceReducer
    },
})