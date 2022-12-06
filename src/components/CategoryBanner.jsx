import "../styles/CategoryBanner.css";

function CategoryBanner({ category }) {
    return (
        <div className="category-banner">
            {
                category && <h1>{category}</h1>
            }
        </div>
    )
}

export default CategoryBanner
