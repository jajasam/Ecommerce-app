import { Link } from "react-router-dom"

import "../styles/Categories.css"

function Categories() {
    return (
        <div className="categories">
            <div className="category" id="category_headphones">
            <span className="img"></span>
            <div>
                <h5>Headphones</h5>
                <Link to="/category/headphones" state={{category: "headphones"}}>Shop</Link>
            </div>
            </div>
            <div className="category" id="category_speakers">
            <span className="img"></span>
            <div>
                <h5>Speakers</h5>
                <Link to="/category/speakers" state={{category: "speakers"}}>Shop</Link>
            </div>
            </div>
            <div className="category" id="category_earphones">
            <span className="img"></span>
            <div>
                <h5>Earphones</h5>
                <Link to="/category/earphones" state={{category: "earphones"}}>Shop</Link>
            </div>
            </div>
        </div>
    )
}

export default Categories
