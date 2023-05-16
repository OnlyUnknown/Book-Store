import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksList : [ {
        "item_id": "item1",
        "title": "The Great Gatsby",
        "author": "John Smith",
        "category": "Fiction"
      },
      {
        "item_id": "item2",
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "category": "Fiction"
      },
      {
        "item_id": "item3",
        "title": "The Selfish Gene",
        "author": "Richard Dawkins",
        "category": "Nonfiction"
      }]
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