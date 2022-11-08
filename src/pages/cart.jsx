import "../App.css"

import Header from "../components/Header";
import Checkout from "../components/Checkout";
import Summary from "../components/Summary";
import Footer from "../components/Footer";

function cart({cart, total, removeFromCart}) {
    return (
        <>
            <Header />
            <div className="cart-content">
                <Checkout />
                <Summary cart={cart} total={total} removeFromCart={removeFromCart} />
            </div>
            <Footer />
        </>
    )
}

export default cart
