import { createSlice } from "@reduxjs/toolkit"

export const userSlicer = createSlice({
    name:"userDetails",
    initialState:{
       user:JSON.parse(localStorage.getItem("USER"))||[],
       loggedIn:false,
    },
    reducers:{
        SignUp:(state,action)=>{
            state.user.push(action.payload)
        }
    }
})
export const  {SignUp} = userSlicer.actions;
export default userSlicer.reducer;