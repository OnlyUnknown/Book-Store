import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reBookAPI,removeBook,getAPI } from '../redux/books/booksSlice';
import { useEffect } from 'react';




const Book = ( props) => {
   
    const dispatch = useDispatch()
    const {id, Name, Author, Genre } = props
    return <div key={id}>
        <p>{Genre}</p>
        <h3>{Name}</h3>
        <p>{Author}</p>
        <button onClick={() => dispatch(reBookAPI(id))}>Delete</button>
    </div>
    }

    Book.propTypes = {
        Name: PropTypes.string.isRequired,
        Author: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      };


export default Book