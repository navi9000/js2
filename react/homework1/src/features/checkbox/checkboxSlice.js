import { createSlice } from '@reduxjs/toolkit'

export const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState: {
        value: false
    },
    reducers: {
        toggle: state => {
            state.value = !state.value
            console.log(state.value)
        }
    }
})

// Action creators are generated for each case reducer function
export const { toggle } = checkboxSlice.actions

export default checkboxSlice.reducer