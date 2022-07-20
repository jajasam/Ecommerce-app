import "../styles/Header.css";
import { useLocation } from 'react-router-dom';

import NavLinks from "./NavLinks"


function Header({isOnHero, displayCategory}) {
    const location = useLocation();
    const category = location?.state?.category;

    return (
        <header className={isOnHero ? '' : 'header-bg'}>
            <div className="header-content">
                <div className="nav-bar">
                    <div className="logo img"></div>
                    <NavLinks />
                    <div className="cart-icon img"></div>
                </div>
            </div>
            <div className="cart"></div>
            {displayCategory &&
                <div className="category-name">
                    {category && <h1>{category}</h1>}
                </div>
            }
        </header>
    )
}

export default Header;
