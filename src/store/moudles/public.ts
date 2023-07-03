import {createSlice} from '@reduxjs/toolkit'



export const publicSlice = createSlice({
    name: 'public',
    initialState: {
        language:'',
        drawerOpen:false,
    },
    reducers: {
        setLanguage:(state,action) => {
            state.language = action.payload;
        },
        setDrawerOpen:(state,action) => {
            state.drawerOpen = action.payload;
        },


    },

})

export const {
    setLanguage,
    setDrawerOpen,
} = publicSlice.actions

export default publicSlice.reducer