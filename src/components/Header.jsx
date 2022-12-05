import "../styles/Header.css";
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import NavLinks from "./NavLinks"
import Menu from "./Menu"
import CartModal from "./CartModal"


function Header({ isOnHero, displayCategory }) {
    const location = useLocation();
    const category = location?.state?.category;

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <header className={isOnHero ? '' : 'header-bg'}>
            <div className="content">
                <div className="top">
                    <div 
                     className="hamburger-icon"
                     onClick={() => setIsMenuOpen(prev => !prev)}
                    >
                    </div>
                    {
                        isMenuOpen && <Menu />
                    }
                    <Link to="/">
                        <div className="logo"></div>
                    </Link>
                </div>
                <NavLinks />
                <div 
                 className="cart-icon"
                 onClick={() => setIsCartOpen(prev => !prev)}
                ></div>
                {
                    isCartOpen && <CartModal />
                }
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
