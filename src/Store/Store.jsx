import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "./CartSlicer";
import userSlicer from "./userSlicer";
export const Store = configureStore({
    reducer:{
     cart:CartSlicer,
     userDetails:userSlicer,
    }
})