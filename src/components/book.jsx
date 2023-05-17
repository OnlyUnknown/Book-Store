import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ( props) => {
    const dispatch = useDispatch()
    const {id, Name, Author, Genre } = props
    return <div key={id}>
        <p>{Genre}</p>
        <h3>{Name}</h3>
        <p>{Author}</p>
        <button onClick={() => dispatch(removeBook(id))}>Delete</button>
    </div>
    }

    Book.propTypes = {
        Name: PropTypes.string.isRequired,
        Author: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
      };


export default Book