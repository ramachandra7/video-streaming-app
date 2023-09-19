import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        isToggleOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isToggleOpen=!state.isToggleOpen;
        },
        closeMenu:(state)=>{
            state.isToggleOpen=false;
        },
    }
});
export const {toggleMenu,closeMenu}= appSlice.actions;
export default appSlice.reducer;