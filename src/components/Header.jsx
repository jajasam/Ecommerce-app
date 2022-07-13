import "../styles/Header.css";

function Header({isOnHero = true}) {
    return (
        <header className={isOnHero ? "" : "header-bg"}>
            <div className="header-content">
                <div className="nav-bar">
                    <div className="logo img"></div>
                    <nav>
                        <ul>
                            <li><a href="./index.html" className="nav-link">Home</a></li>
                            <li><a href="./html/category.html" className="nav-link">Headphones</a></li>
                            <li><a href="./html/category.html" className="nav-link">Speakers</a></li>
                            <li><a href="./html/category.html" className="nav-link">Earphones</a></li>
                        </ul>
                    </nav>
                <div className="cart-icon img"></div>
            </div>
            </div>
        </header>
    )
}

export default Header;
