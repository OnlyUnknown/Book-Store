import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddForm = () => {
  
const handleClick = () => {
    const input = document.querySelector(".titlebook").value
  return input
}
const handleClick2 = () => {
    const input = document.querySelector(".authorbook").value
  return input
}

    const dispatch = useDispatch()

    return<>
    <input className="titlebook" placeholder="Book Name" type="text"></input>
    <input className='authorbook' placeholder="Author" type="text"></input>
    <button onClick={() => dispatch(addBook([handleClick(), handleClick2()]))}>Add book</button>
    </>
}

export default AddForm