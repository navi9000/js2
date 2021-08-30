import { configureStore } from '@reduxjs/toolkit'
import checkboxSlice from '../features/checkbox/checkboxSlice'

export default configureStore({
    reducer: {
        checkbox: checkboxSlice
    }
})