import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';


const url = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GqbjaefJTpcsI7CgFsuq/books"


export const getAPI = createAsyncThunk(

 'Books/fetchbook', async () =>{ 
  try{
  const response = await axios.get(url)
    console.log(response.data)
    return response.data
  } catch(err){
    return err.message
  }

}
)

export const reBookAPI = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});


export const postBooks = createAsyncThunk(

  'Books/postBook', async ([title,author]) =>{ 
   try{
   const response = await axios.post(url, {
    item_id : uuidv4(),
    title: title,
    author: author,
    category: "Not selected"
   })
   console.log(response.data)
   return response.data
   } catch(err){
     return err.message
   }
 
 }
 
 )



const initialState = {
    booksList : [],
      isLoading: false,
      error: undefined,
      count: 0
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
     .addCase(postBooks.pending, (state) => {
      state.isLoading = true
      
     })
     .addCase(postBooks.fulfilled,(state) => {
      state.isLoading = false
      state.count++
     }).addCase(postBooks.rejected,(state,action) => {
      state.error = action.error.message
     })
     .addCase(reBookAPI.pending,(state) => {
      state.isLoading = true
      
     })
     .addCase(reBookAPI.fulfilled,(state) => {
      state.isLoading = false;
      state.count++
      
     }).addCase(reBookAPI.rejected,(state,action) => {
      state.error = action.error.message
     })
    }
 })

 export const {addBook,removeBook} = booksSlice.actions

 export default booksSlice.reducer