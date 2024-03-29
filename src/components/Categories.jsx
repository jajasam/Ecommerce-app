import { Link } from "react-router-dom"

import "../styles/Categories.css"

function Categories() {
    const categories = ['Headphones', 'Speakers', 'Earphones']
    const categoriesElems = categories.map((category, i) => (
        <div className="category" key={i}>
            <img 
             src={
                require(`../assets/shared/desktop/image-category-thumbnail-${category.toLowerCase()}.png`)}
             alt={category}
            />
            <p>{category}</p>
            <Link
                to={`/category/${category.toLowerCase()}`} 
                state={{category: `${category.toLowerCase()}`}}
                className="shop-link">
                Shop
            </Link>
        </div>
    ))
    return (
        <section className="categories container">
            {
                categoriesElems && categoriesElems
            }
        </section>
    )
}

export default Categories
