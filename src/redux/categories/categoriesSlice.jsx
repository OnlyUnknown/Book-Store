import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catigory : []
};

 const catigorySlice = createSlice({
    name: "Catigory",
    initialState,
    reducers: {
        check:(state) => {
            if(state.catigory.length < 1){
                return "Under construction"
            }
        },
       
    }
 })

 export const {check} = catigorySlice.actions

 export default catigorySlice.reducer