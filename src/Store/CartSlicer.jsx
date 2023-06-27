import { createSlice } from "@reduxjs/toolkit";

const CartSlicer = createSlice({
    name:"cart",
    initialState:{
        products:JSON.parse(localStorage.getItem("mycart"))||[],
        
    },
    reducers:{
        AddToCart:(state,action)=>{
            state.products.push(action.payload)
        },
        Remove:(state,action)=>{
           state.products=state.products.filter((item)=>item.id !== action.payload.id)
        },
        Decrease:(state,action)=>{
          const index = state.products.findIndex(item=>item.id==action.payload.id)
          console.log(index)
          if(index!=-1){
            state.products.splice(index,1)
          }
            
        },

    }
})

export const {AddToCart,Remove,Decrease} =CartSlicer.actions;
export default CartSlicer.reducer