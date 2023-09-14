import { createSlice } from "@reduxjs/toolkit";

const slotSlice=createSlice({
    name:"slot",
    initialState:{
        day:[],
        time:[]
    },
    reducers:{
        addSlot:(state,action)=>{
            state.day.push(action.payload)
        },
        addTime:(state,action)=>{
            state.time.push(action.payload)
        }
    }
})

export const{addSlot,addTime}=slotSlice.actions
export default slotSlice.reducer