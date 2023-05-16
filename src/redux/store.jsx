import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/books/booksSlice"
import catigoryReducer from "../redux/categories/categoriesSlice"

export const store = configureStore({
    reducer: {
        books: booksReducer,
        catigury: catigoryReducer
    },
})

