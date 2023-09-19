import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        autocompleteResult:{
        }
    },
    reducers:{
        cacheResult:(state,action)=>{
            state.autocompleteResult={...state.autocompleteResult,...action.payload}
        }
    }
});

export default searchSlice.reducer;
export const {cacheResult}=searchSlice.actions;