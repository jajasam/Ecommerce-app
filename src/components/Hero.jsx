import "../styles/Hero.css"
import { Link } from "react-router-dom"

import Header from "./Header";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-img img">
                <Header isOnHero={true} />
                <div className="hero-info">
                    <div>
                        <h4>New product</h4>
                        <h1>XX99 Mark II Headphones</h1>
                        <p>  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Link to="/product/3" state={{productId: 3}} className="btn primary-btn">See product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;