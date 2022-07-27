import "../styles/Summary.css"
import { Link } from "react-router-dom"
import { ScreenSizeContext } from "../App";

function Summary({cart, total, removeFromCart}) {
    return (
        <div className="summary-container">
           <h3>Summary</h3>
            {cart.length > 0 && 
            <ul>
                 <ScreenSizeContext.Consumer>
                    {screenSize => 
                        cart.map((item, i) => 
                            <li key={i}>
                                <img src={require(`../assets/product-${item.productData.slug}/${screenSize}/image-category-page-preview.jpg`)} alt={item.productData.name} className="img" />
                                <div>
                                    <p>{item.productData.name}</p>
                                    <p>${item.productData.price}</p>
                                    <p>x{item.quantity}</p>
                                </div>
                                {/* <button className="remove-item-btn" onClick={() => removeFromCart(item.productData.id)}>remove item</button> */}
                            </li>
                    )}
                 </ScreenSizeContext.Consumer>
                 <p>TOTAL ${total}</p>
                <Link to="/" onClick={() => alert("Thank you for your order!")}>
                    <button className="primary-btn btn">Continue and pay</button>
                </Link>
            </ul>}
            {
                !cart.length && 
                <p>Your cart is empty</p>
            }
        </div>
    )
}

export default Summary
