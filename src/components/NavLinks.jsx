import { Link } from "react-router-dom";

import "../styles/NavLinks.css"

function NavLinks() {
    return (
    <div className="nav-links">
        <ul>
            <li>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to={"/category/headphones"} state={{category: "headphones"}} className="nav-link">Headphones</Link>
            </li>
            <li>
                <Link to={"/category/speakers"} state={{category: "speakers"}} className="nav-link">Speakers</Link>
            </li>
            <li>
                <Link to={"/category/earphones"} state={{category: "earphones"}} className="nav-link">Earphones</Link>
            </li>
        </ul>
    </div>
    )
}

export default NavLinks;
