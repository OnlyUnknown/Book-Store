import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksList : []
};

 const booksSlice = createSlice({
    name: "booksList",
    initialState,
    reducers: {
        addBook:(state,action) => {
            const bookTitle = action.payload;
            state.booksList.push({Book : bookTitle,
                 Id : state.booksList.length})
        },
        removeBook: (state,action) => {
            const Id = action.payload
            state.booksList = state.booksList.filter((item)=>
                item.Id !== Id
            )
        }
    }
 })

 export const {addBook,removeBook} = booksSlice.actions

 export default booksSlice.reducer