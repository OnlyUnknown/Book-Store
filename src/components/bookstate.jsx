import Book from "./book"
import AddForm from "./AddForm"
import { useSelector,useDispatch } from "react-redux"
import { getAPI } from "../redux/books/booksSlice"
import { useEffect } from "react"

const BookList = () => {
    const dispatch = useDispatch()
    const {booksList, isLoading, error} = useSelector((store) => 
        store.books
        
    )
    useEffect(() => {
        
        dispatch(getAPI())
    }, [dispatch])
    if(isLoading === true){
        return <div>Loading</div>
    } else if(isLoading === false){
        return <div>Loaded</div>
    }
    return(
        <div>
        {booksList.map((item) => {
           return( <Book key={item.item_id} id={item.item_id} Name={item.title} 
            Author={item.author} 
            Genre={item.catigory}/>
           )
        })}
        
        </div>
    )
}


const Bookstate = () => {
    return <>
    <h2>This is Home page</h2>
    <BookList/>
    <br/>
    <br/>
    <AddForm/>
    </>
}

export default Bookstate