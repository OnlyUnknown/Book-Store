import Book from "./book"
import AddForm from "./AddForm"
import { useSelector } from "react-redux"




const BookList = () => {
    const {booksList} = useSelector((store) => 
        store.books
        
    )
    
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