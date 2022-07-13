import "../styles/Hero.css"

import Header from "./Header";

function Hero() {
    return (
        <div>
            <div className="hero img">
            <Header isOnHero={true} />
            <div className="hero-info">
                <h4>New product</h4>
                <h1>XX99 Mark II Headphones</h1>
                <p>  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="btn primary-btn"><a href="./html/product-xx99-mark-two-headphones.html">See product</a></button>
            </div>
            </div>
        </div>
    )
}

export default Hero;