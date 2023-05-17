import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksList : [ {
        item_id: "item1",
        title: "The Great Gatsby",
        author: "John Smith",
        category: "Fiction"
      },
      {
        item_id: "item2",
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        category: "Fiction"
      },
      {
        item_id: "item3",
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "Nonfiction"
      }]
};

 const booksSlice = createSlice({
    name: "booksList",
    initialState,
    reducers: {
        addBook:{
            reducer(state, action){
                const bookTitle = action.payload[0];
                const Author = action.payload[1];
                state.booksList.push({item_id : `item`+ state.booksList.length,
                    title : bookTitle,
                     item_id : state.booksList.length,
                     author : Author})
              },
            

           
        },
        removeBook: (state,action) => {
            const Id = action.payload
            state.booksList = state.booksList.filter((item)=>
                item.item_id !== Id
            )
        }
    }
 })

 export const {addBook,removeBook} = booksSlice.actions

 export default booksSlice.reducer