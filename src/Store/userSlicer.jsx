import { createSlice } from "@reduxjs/toolkit"

export const userSlicer = createSlice({
    name:"userDetails",
    initialState:{
       user:[],
    },
    reducers:{
        SignUp:(state,action)=>{
            state.user.push(action.payload)
        }
    }
})
export const  {SignUp} = userSlicer.actions;
export default userSlicer.reducer;