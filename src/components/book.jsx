import PropTypes from 'prop-types';

const Book = ( props) => {
    const { Name, Author, Genre } = props
    return <>
        <p>{Genre}</p>
        <h3>{Name}</h3>
        <p>{Author}</p>
        <button>Delete</button>
    </>
    }

    Book.propTypes = {
        Name: PropTypes.string.isRequired,
        Author: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
      };


export default Book