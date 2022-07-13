import "../styles/Categories.css"

function Categories() {
    return (
        <div className="categories">
            <div className="category" id="category_headphones">
            <span className="img"></span>
            <div>
                <h5>Headphones</h5>
                <button><a href="./html/headphones.html">Shop</a></button>
            </div>
            </div>
            <div className="category" id="category_speakers">
            <span className="img"></span>
            <div>
                <h5>Speakers</h5>
                <button>Shop</button>
            </div>
            </div>
            <div className="category" id="category_earphones">
            <span className="img"></span>
            <div>
                <h5>Earphones</h5>
                <button>Shop</button>
            </div>
            </div>
        </div>
    )
}

export default Categories
