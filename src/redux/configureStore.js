import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationReducer";


const store =  configureStore({
    reducer: {
        reservation: reservationReducer,
    }
})
export default store