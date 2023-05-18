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
        return (
            <div>
            { Object.keys(booksList).map((item) => {
               const BookL = booksList[item][0]
                
                   return( <Book key={BookL.item_id} id={BookL.item_id} Name={BookL.title} 
                Author={BookL.title} 
                Genre={BookL.catigory}/>
               ) 
                })
               
            }
            
            </div>
        )
    }
    
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