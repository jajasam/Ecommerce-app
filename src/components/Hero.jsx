import "../styles/Hero.css"
import { Link } from "react-router-dom"

import Header from "./Header";

function Hero() {

    console.log()
    return (
        <div>
            <div className="hero img">
                <Header isOnHero={true} />
                <div className="hero-info">
                    <h4>New product</h4>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link to="/product/3" state={{productId: 3}} className="btn primary-btn">See product</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;