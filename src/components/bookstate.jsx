import Book from "./book"
import AddForm from "./AddForm"
import { useSelector,useDispatch } from "react-redux"
import { getAPI } from "../redux/books/booksSlice"
import { useEffect } from "react"

const BookList = () => {
    const dispatch = useDispatch()
    const {booksList, isLoading, error,count} = useSelector((store) => 
        store.books
        
    )
    useEffect(() => {
        
        dispatch(getAPI())
    }, [dispatch,count])
    if(isLoading === true){
        return <div>Loading</div>
    }else if(error !== undefined){
        return <div>{error}</div>
    }else if(isLoading === false){
        return (
            <div>
            { Object.keys(booksList).map((item) => {
               const BookL = booksList[item][0]
                
                   return( <Book key={item} id={item} Name={BookL.title} 
                Author={BookL.author} 
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
    <BookList/>
    <br/>
    <br/>
    <AddForm/>
    </>
}

export default Bookstate