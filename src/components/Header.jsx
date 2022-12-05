import "../styles/Header.css";
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import NavLinks from "./NavLinks"
import Menu from "./Menu"


function Header({ isOnHero, displayCategory }) {
    const location = useLocation();
    const category = location?.state?.category;

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleMenuDisplay() {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <header className={isOnHero ? '' : 'header-bg'}>
            <div className="content">
                <div>
                    <div 
                     className="hamburger-icon"
                     onClick={handleMenuDisplay}
                    >
                    </div>
                    {
                        isMenuOpen && <Menu />
                    }
                    <Link to="/">
                        <div className="logo img"></div>
                    </Link>
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
