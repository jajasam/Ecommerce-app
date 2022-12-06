import "../styles/ProductDetails.css"
import { useState } from "react"
import { ScreenSizeContext } from "../App.js"

function ProductDetails({productData, updateCart}) {
    const { id, name, description, price, features, includes, slug } = productData;
    const [quantity, setQuantity] = useState(1);

    function updateQuantity(e) {
        setQuantity(e.target.value)
    }

    return (
        <section className="product_container container">
            <div className="top">
                <ScreenSizeContext.Consumer>
                    {screenSize => (
                        <img src={require(`../assets/product-${slug}/${screenSize}/image-product.jpg`)} alt={name} />
                    )}
                </ScreenSizeContext.Consumer>
                <div>
                    {
                        productData.new && 
                        <p className="overline">New product</p>
                    }
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p className="price">$ {price}</p>
                    <div>
                        <input type="number" name="quantity" id="quantity" min="1" onChange={updateQuantity} defaultValue="1" />
                        <button className="btn primary-btn" onClick={() => updateCart(productData, quantity)}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="features">
                    <h3>Features</h3>
                    <p>{features}</p>
                </div>
                <div className="in-the-box">
                    <h3>In the box</h3>
                    <ul>
                        {includes.map((include, i) => <li key={i}><span>{include.quantity}x</span><span>{include.item}</span></li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
