import { Link } from "react-router-dom"

const Nav = () => {
    return <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catigories">Catigories</Link></li>
    </ul>
    </>
}

export default Nav