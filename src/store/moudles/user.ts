import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'



export const getPermissions = createAsyncThunk('login/permissions',
    async () => {
        return "hello"
        // return await AxiosHttp.get('/menuList');
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token:'',

    },
    reducers: {
        // setUserInfo:(state,action) => {
        //     state.userInfo = action.payload;
        // },
        loginOut:()=>{
            localStorage.removeItem("root");
        },

    },
    extraReducers:{
        /* [getPermissions.fulfilled.type]:(state,action:any) =>{
             state.permissions = action.payload.list
         },*/

    }
})

export const {
    loginOut,
} = userSlice.actions

export default userSlice.reducer