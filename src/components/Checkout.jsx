import "../styles/Checkout.css"

function Checkout() {
    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form action="/">
                <h5>Billing details</h5>
                <div className="billing-details">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="phone-number">Phone number</label>
                    <input type="tel" name="phone-number" id="phone-number" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <h5>Shipping info</h5>
                <div className="shipping-info">                    
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" />

                    <label htmlFor="zip-code">ZIP CODE</label>
                    <input type="text" name="zip-code" id="zip-code" />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />

                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" />
                </div>

                <h5>Payment details</h5>
                <div className="payment-details">
                    <label htmlFor="cardholder-name">Cardholder name:</label>
                    <input type="text" name="cardholder-name" id="cardholder-name" />


                    <label htmlFor="card-number">Card Number</label>
                    <input type="text" name="card-number" id="card-number" />
                    
                    <label htmlFor="expiration-date">Expiration date</label>
                    <input type="text" name="expiration-date" id="expiration-date" />

                    <label htmlFor="security-code">Security Code</label>
                    <input type="text" name="security-code" id="security-code" />
                </div>
            </form>
        </div>
    )
}

export default Checkout
