import { Link } from "react-router-dom"

import "../styles/Product.css";
import "../App.css"

function Product({productData, isOdd}) {
    const {id, name, description, price} = productData

// categoryImage: {mobile: './assets/product-yx1-earphones/mobile/image-category-page-preview.jpg', tablet: './assets/product-yx1-earphones/tablet/image-category-page-preview.jpg', desktop: './assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'}

// gallery: {first: {…}, second: {…}, third: {…}}
// image: {mobile: './assets/product-yx1-earphones/mobile/image-product.jpg', tablet: './assets/product-yx1-earphones/tablet/image-product.jpg', desktop: './assets/product-yx1-earphones/desktop/image-product.jpg'}
// includes: (5) [{…}, {…}, {…}, {…}, {…}]
// new: true
// others: (3) [{…}, {…}, {…}]
// price: 599
// slug: "yx1-earphones"


    return (
        <div className={`product ${isOdd ? 'reverse' : ''}`}>
            <div className="img"></div>
            <div className="product-infos">
                <div>
                {productData.new && <h4>New product</h4>}
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/product/${id}`} state={{productId: id}}><button className="btn primary-btn">See product</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Product
