import { createSlice } from "@reduxjs/toolkit"

export const userSlicer = createSlice({
    name:"userDetails",
    initialState:{
       user:[],
       loggedIn:JSON.parse(localStorage.getItem("loggedin"))||false,
       userName:JSON.parse(localStorage.getItem("username"))||"",
       showModal:false
    },
    reducers:{
        SignUp:(state,action)=>{
            state.user.push(action.payload)
        },
        setUserName:(state,action)=>{
            state.userName=action.payload
        },
        setLogin:(state,action)=>{
            state.loggedIn=action.payload
        },
        toggleModal:(state,action)=>{
            state.showModal=action.payload
        }
    }
})
export const  {SignUp,setUserName,setLogin,toggleModal} = userSlicer.actions;
export default userSlicer.reducer;