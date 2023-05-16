import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/books/booksSlice"

export const store = configureStore({
    reducer: {
        books: booksReducer,
    },
})

