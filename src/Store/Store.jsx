import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "./CartSlicer";
export const Store = configureStore({
    reducer:{
     cart:CartSlicer,
    }
})