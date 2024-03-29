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

    function handleMenuDisplay () {
        setIsCartOpen(false)
        setIsMenuOpen(prev => !prev)
    }

    function handleCartDisplay () {
        setIsMenuOpen(false)
        setIsCartOpen(prev => !prev)
    }

    //close menu or cart if overlay is clicked
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            setIsCartOpen(false)
            setIsMenuOpen(false)
        }
    })

    return (
        <header 
         className={`${isOnHero ? '' : 'header-bg'} ${isMenuOpen || isCartOpen ? 'overlay' : ''}`}>
            <div className="content">
                <div className="top">
                    <div 
                     className="hamburger-icon"
                     onClick={() => handleMenuDisplay()}
                    >
                    </div>
                    {
                        isMenuOpen && <Menu />
                    }
                    <Link to="/" aria-label="Home">
                        <div className="logo"></div>
                    </Link>
                </div>
                <NavLinks />
                <div 
                 className="cart-icon"
                 onClick={() => handleCartDisplay()}
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
