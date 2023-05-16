import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store.jsx';
import {addBook,removeBook} from './redux/books/booksSlice.jsx';

console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => {
  console.log("Updated state" , store.getState())
})

store.dispatch(addBook("Eat That Frog"))
store.dispatch(addBook("Automic Habits"))
store.dispatch(removeBook(1))
unsubscribe()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
