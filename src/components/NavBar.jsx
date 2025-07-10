import { Link } from "react-router-dom";
import "../css/Navabar.css"


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <link to="/">Movie App</link>



        </div>

        <div className="navbar-link">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>

    </nav>
}


export default NavBar

















