import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/booksSlice';


const AddForm = () => {
  const dispatch = useDispatch()
 


const handleClick = () => {
    const input = document.querySelector(".titlebook").value
  return input
}
const handleClick2 = () => {
    const input = document.querySelector(".authorbook").value
  return input
}

  
    return<div className='addC'>
    <h2 className='addNew'>ADD NEW BOOK</h2>
    <input className="titlebook" placeholder="Book Name" type="text"></input>
    <input className='authorbook' placeholder="Author" type="text"></input>
    <button className='addB' onClick={() => dispatch(postBooks([handleClick(), handleClick2()]))}>Add book</button>
    </div>
}

export default AddForm