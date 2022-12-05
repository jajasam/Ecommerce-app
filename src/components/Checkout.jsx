import { useState } from "react"
import cashOnIcon from '../assets/checkout/icon-cash-on-delivery.svg';


import "../styles/Checkout.css"

function Checkout() {
    const [ paymentMethod, setPaymentMethod ] = useState(null)

    function handlePaymentMethod(e) {
        setPaymentMethod(e.target.value)
    }

    return (
        <div className="checkout container">
            <h3>Checkout</h3>
            <form action="/">
                <div className="billing-details">
                    <p className="subtitle">Billing details</p>
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>   
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="phone-number">Phone number</label>
                            <input type="tel" name="phone-number" id="phone-number" />
                        </div>
                    </div>
                </div>
                <div className="shipping-info">
                    <p className="subtitle">Shipping info</p>
                    <div>                    
                        <div className="span-2">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" />
                        </div>
                        <div>
                            <label htmlFor="zip-code">ZIP CODE</label>
                            <input type="text" name="zip-code" id="zip-code" />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" />
                        </div>
                        <div>
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" />
                        </div>
                    </div>
                </div>
                <div className="payment-details">
                    <p className="subtitle">Payment details</p>
                    <div>
                        <p>Payment method</p>
                        <div>
                            <div className="payment-method">
                                <input 
                                 type="radio" 
                                 id="e-money" 
                                 name="payment-method" 
                                 value="e-money" 
                                 onChange={(e) => handlePaymentMethod(e)}
                                />
                                <label htmlFor="e-money">e-Money</label>
                            </div>
                            <div className="payment-method">
                                <input 
                                 type="radio" 
                                 id="cash-on" 
                                 name="payment-method" 
                                 value="cash-on" 
                                 onChange={(e) => handlePaymentMethod(e)}
                                  />
                                <label htmlFor="css">Cash on Delivery</label>
                            </div>
                        </div>
                        {
                            paymentMethod === 'e-money' &&
                            <>
                                <div>
                                    <label htmlFor="e-money-number">e-Money Number</label>
                                    <input type="text" name="e-money-number" id="e-money-number" />
                                </div>
                                <div>   
                                    <label htmlFor="e-money-pin">e-Money Pin</label>
                                    <input type="text" name="e-money-pin" id="e-money-pin" />
                                </div>
                            </>
                        }
                        {
                            paymentMethod === 'cash-on' &&
                            <div className="cash-on-info span-2">
                                <img 
                                 src={cashOnIcon} 
                                 alt="Cash on Icon"
                                />
                                <p>
                                    The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout
