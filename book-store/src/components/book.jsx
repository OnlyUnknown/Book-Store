const Book = ( props) => {
    const { Name, Author, Genre } = props
    return <>
        <p>{Genre}</p>
        <h3>{Name}</h3>
        <p>{Author}</p>
        <button>Delete</button>
    </>
    }


export default Book