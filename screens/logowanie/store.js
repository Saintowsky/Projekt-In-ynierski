import {configureStore} from "@reduxjs/toolkit";
import  navReducer  from "../../navigation/navSlice";


export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})