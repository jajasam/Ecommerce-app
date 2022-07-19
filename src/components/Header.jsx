import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Header({isOnHero}) {
    const location = useLocation();
    const category = location?.state?.category;

    return (
        <header className={isOnHero ? '' : 'header-bg'}>
            <div className="header-content">
                <div className="nav-bar">
                    <div className="logo img"></div>
                    <nav>
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
                    </nav>
                <div className="cart-icon img"></div>
            </div>
            </div>
            {!isOnHero &&
                <div className="category-name">
                    {category && <h1>{category}</h1>}
                </div>
            }
        </header>
    )
}

export default Header;
