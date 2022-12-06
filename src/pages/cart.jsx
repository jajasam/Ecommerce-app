import "../App.css"

import Header from "../components/Header";
import Checkout from "../components/Checkout";
import Summary from "../components/Summary";

function cart({cart, total, removeFromCart}) {
    return (
        <>
            <Header />
            <div className="cart-content container">
                <Checkout />
                <Summary cart={cart} total={total} removeFromCart={removeFromCart} />
            </div>
        </>
    )
}

export default cart
