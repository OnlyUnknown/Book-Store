import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reBookAPI } from '../redux/books/booksSlice';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 64;

const Book = ( props) => {
   
    const dispatch = useDispatch()
    const {id, Name, Author, Genre } = props
    return <div className='BookC' key={id}>
        <div className='content'>
        <p>{Genre}</p>
        <h3 className='TitleB'>{Name}</h3>
        <p className='AuthorB' >{Author}</p>
        <div className='editor'>
        <a>Comments </a> |{" "}
        <a onClick={() => dispatch(reBookAPI(id))}>Delete</a>| {" "}
        <a>Edit</a>
        </div>
        </div>
        <div>
        </div>
        <div className='Complition'>
            <div className='Rectangle'>
            

<CircularProgressbar value={percentage} text={``} />
            </div>
            <div>
                <div className='Percentage'>64%</div>
                <div className='Completed'>Completed</div>
                </div>
        </div>
        <div className='UProgress'>
            <div className='Current-Chapter'>
                CURRENT CHAPTER
            </div>
            <div className='ChapterN'>
                Chapter 17
            </div>
            <button className='ProgressB'>
            Update Progress
            </button>
        </div>
    </div>
    }

    Book.propTypes = {
        Name: PropTypes.string.isRequired,
        Author: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      };


export default Book