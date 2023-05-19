import { Link } from "react-router-dom"
import '../App.css'

const Nav = () => {
    return <div className="Nav-C">
    <h1 className="BookCMS">Bookstore CMS</h1>
    <ul className="Nav-L">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catigories">Catigories</Link></li>
    </ul>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small/user-profile-icon-free-vector.jpg" className="icon"/>
    </div>
}

export default Nav