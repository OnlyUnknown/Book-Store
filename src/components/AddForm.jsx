import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import { useState } from 'react';




const AddForm = () => {
  
const handleClick = () => {
    const input = document.querySelector(".pClass").value
  return input
}
const handleClick2 = () => {
    const input = document.querySelector(".pClass").value
  return input
}

    const dispatch = useDispatch()

    return<>
    <input className="pClass" placeholder="Book Name" type="text"></input>
    <input placeholder="Author" type="text"></input>
    <button onClick={() => dispatch(addBook([handleClick(), handleClick2()]))}>Add book</button>
    </>
}

export default AddForm