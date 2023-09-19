import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_CHAT} from "../utils/constants";
const chatSlice=createSlice({
    name:"chatSlice",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.length>=OFFSET_LIVE_CHAT && state.messages.splice(0,1);
            state.messages.push(action.payload);
        }
    }
});

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;