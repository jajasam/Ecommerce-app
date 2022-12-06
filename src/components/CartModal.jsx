import { Link } from 'react-router-dom'

import "../styles/CartModal.css"

function CartModal() {
    return (
        <div className="cart-modal">
            <div>
                <h6>Cart ({window.cart.length})</h6>
            </div>
            {
                !window.cart.length ? 
                <p>Your cart is empty</p> :
                <>
                    <ul>
                        {
                            window.cart.map((item, i) => 
                            <li 
                                key={i}>
                                <img src={require(`../assets/cart/image-${item.productData.slug}.jpg`)} alt={item.productData.name} />
                                <div className="product-info">
                                    <p>{item.productData.name}</p>
                                    <p>${item.productData.price}</p>
                                </div>
                                <p>x{item.quantity}</p>
                            </li>
                        )}
                    </ul>
                    <div className="total">
                        <p>TOTAL</p>
                        <p>${window.total}</p>
                    </div>
                    <Link to="/cart">
                        <button className="primary-btn btn">
                            Checkout
                        </button>
                    </Link>
                </>
            }
        </div>
    )
}

export default CartModal
