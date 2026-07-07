import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name:"counter",
    initialState: {
        count: 0,
    },

    reducers:{
        increment:(state)=>{
            state+1;
        },
        decrement:(state)=>{
            state-1;
        }
    }
})
export default {increment,decrement} = counterslice.actions
export default counterslice.reducer