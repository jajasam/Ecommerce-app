import "../styles/ProductDetails.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ScreenSizeContext } from "../App.js"

function ProductDetails({productData, updateCart}) {
    const { id, name, description, price, features, includes, slug } = productData;
    const [quantity, setQuantity] = useState(1);

    function updateQuantity(e) {
        setQuantity(e.target.value)
    }

    return (
        <div className="product_container container">
            <div className="top">
                <ScreenSizeContext.Consumer>
                    {screenSize => (
                        <img src={require(`../assets/product-${slug}/${screenSize}/image-product.jpg`)} alt={name} className="img" />
                    )}
                </ScreenSizeContext.Consumer>
                <div>
                    {
                        productData.new && 
                        <p className="overline">New product</p>
                    }
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h6 className="price">$ {price}</h6>
                    <div>
                        <input type="number" name="quantity" id="quantity" min="1" onChange={updateQuantity} defaultValue="1" />
                        <Link to="/cart">
                            <button className="btn primary-btn" onClick={() => updateCart(productData, quantity)}>Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="features">
                    <h4>Features</h4>
                    <p>{features}</p>
                </div>
                <div className="in-the-box">
                    <h4>In the box</h4>
                    <ul>
                        {includes.map((include, i) => <li key={i}><span>{include.quantity}</span><span>{include.item}</span></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
