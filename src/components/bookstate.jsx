import Book from "./book"
import AddForm from "./AddForm"
import { useState } from "react"

const BookList = () => {
    const [item] = useState([
        {
            id:1,
            name:"Eat that frog",
            Author:"Brian Tracy",
            Genre:"Self Improvment"
        },
        {
            id:2,
            name:"Automic Habits",
            Author:"James Clear",
            Genre:"Self Improvment"   
        },
        {
            id:3,
            name:"Literary Translation",
            Author:"Hasan Ghazala",
            Genre:"Education"  
        }
    ])
    return(
        <div>
        {item.map((item) => {
           return( <Book key={item.id} Name={item.name} 
            Author={item.Author} 
            Genre={item.Genre}/>
           )
        })}
        
        </div>
    )
}
console.log(BookList)

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