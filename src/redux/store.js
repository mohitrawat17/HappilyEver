import botSlice from "./botSlice";
import slotSlice from "./slotSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    //slices
    reducer:{
       bot:botSlice,
       slot:slotSlice
    }
})

export default store;