import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books : []
};

 const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook:(state,action) => {
            const bookTitle = action.payload;
            state.books.push(bookTitle)
        },
        removeBook: (state,action) => {
            const bookTitle = action.payload
            state.books = state.books.filter((item)=>
                item !== bookTitle
            )
        }
    }
 })

 export const {addBook,removeBook} = booksSlice.actions

 export default booksSlice.reducer