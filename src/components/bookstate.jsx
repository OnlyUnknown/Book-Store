import Book from "./book"
import AddForm from "./AddForm"
import { useState } from "react"

const bookarr = 
    [

]

const BookList = () => {
    const [item] = useState([
        {
            name:"Eat that frog",
            Author:"Brian Tracy",
            Genre:"Self Improvment"
        },
        {
            name:"Automic Habits",
            Author:"James Clear",
            Genre:"Self Improvment"   
        },
        {
            name:"Literary Translation",
            Author:"Hasan Ghazala",
            Genre:"Education"  
        }
    ])
    return(
        <div>
        {item.map((item) => {
            console.log(item);
           return( <Book Name={item.name} 
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