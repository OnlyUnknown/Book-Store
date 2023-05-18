import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const url = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GqbjaefJTpcsI7CgFsuq/books"


export const getAPI = createAsyncThunk(

 'Books/fetchbook', async () =>{ 
  try{
  const response = await axios.get(url)
    
    return response.data
  } catch(err){
    return err.message
  }

}
)


export const postBooks = createAsyncThunk(

  'Books/fetchbook', async (ID,title,author,category) =>{ 
   try{
   const response = await axios.post(url, {
    item_id : ID,
    title: title,
    author: author,
    category: category
   }
    )
     
     return response.data
   } catch(err){
     return err.message
   }
 
 }
 )



const initialState = {
    booksList : [ {
        item_id: "item1",
        title: "The Great Gatsby",
        author: "John Smith",
        catigory: "Fiction"
      },
      {
        item_id: "item2",
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        catigory: "Fiction"
      },
      {
        item_id: "item3",
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        catigory: "Nonfiction"
      }],
      isLoading: true,
      error: undefined
};

 const booksSlice = createSlice({
    name: "booksList",
    initialState,
    reducers: {
        addBook:{
            reducer(state, action){
                const bookTitle = action.payload[0];
                const Author = action.payload[1];
                if(bookTitle !== "" && Author !== "" ){
                state.booksList.push({item_id : `item`+ state.booksList.length,
                    title : bookTitle,
                     author : Author})
                }
              },
            
        },
        removeBook: (state,action) => {
            const Id = action.payload
            state.booksList = state.booksList.filter((item)=>
                item.item_id !== Id
            )
        }
    },
    extraReducers (builder) {
      builder
      .addCase(getAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAPI.fulfilled, (state,action) => {
        state.booksList = action.payload
        state.isLoading = false
      })
      .addCase(getAPI.rejected, (state,action) => {
        state = false;
        state.booksList = [];
        state.error = action.error.message
      })
    }
 })

 export const {addBook,removeBook} = booksSlice.actions

 export default booksSlice.reducer