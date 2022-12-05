import "../styles/Summary.css"
import { Link } from "react-router-dom"
import { ScreenSizeContext } from "../App";

function Summary({cart, total, removeFromCart}) {
    return (
        <div className="summary container">
           <h6>Summary</h6>
            {cart.length > 0 && 
            <ul>
                 <ScreenSizeContext.Consumer>
                    {screenSize => 
                        cart.map((item, i) => 
                            <li 
                             key={i} 
                             className="product-summary">
                                <img 
                                 src={require(`../assets/cart/image-${item.productData.slug}.jpg`)} 
                                 alt={item.productData.name} />
                                <div>
                                    <div>
                                        <p>{item.productData.name}</p>
                                        <p>${item.productData.price}</p>
                                    </div>
                                    <p>x{item.quantity}</p>
                                </div>
                                <button className="remove-item-btn" onClick={() => removeFromCart(item.productData.id)}>remove item</button>
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
