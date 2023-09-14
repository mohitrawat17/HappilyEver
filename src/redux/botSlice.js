import { createSlice } from "@reduxjs/toolkit";

const botSlice=createSlice({
    name:"bot",
    initialState:{
        names:[],
        ages:[]
    },
    reducers:{
        addName:(state,action)=>{
            state.names.push(action.payload);
        },
        addAge:(state,action)=>{
            state.ages.push(action.payload);
        }
    }
})

export const{addName,addAge}=botSlice.actions
export default botSlice.reducer