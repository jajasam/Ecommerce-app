import "../styles/Header.css";
import { Link, useLocation } from 'react-router-dom';

import NavLinks from "./NavLinks"


function Header({ isOnHero, displayCategory }) {
    const location = useLocation();
    const category = location?.state?.category;

    return (
        <header className={isOnHero ? '' : 'header-bg'}>
            <div className="content">
                <div>
                    <div className="hamburger-icon"></div>
                    <div className="logo img"></div>
                </div>
                <NavLinks />
                <Link to="/cart" className="cart-icon img"></Link>
            </div>
            {
                displayCategory &&
                <div className="category-name">
                    {category && <h1>{category}</h1>}
                </div>
            }
        </header>
    )
}

export default Header;
