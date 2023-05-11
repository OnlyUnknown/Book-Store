import Book from "./book"
import AddForm from "./AddForm"

const Bookstate = () => {
    return <>
    <h2>This is Home page</h2>
    <Book Name="Eat that frog" Author="Brian Tracy"
    Genre="Self Improvment"
    />
    <Book Name="Automic habits" Author="James Clear"
    Genre="Self Improvment"
    />
    <Book Name="Literary Translation" Author="Hasan ghazala"
    Genre="Education"
    />
    <br/>
    <br/>
    <AddForm/>
    </>
}

export default Bookstate