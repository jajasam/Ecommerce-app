import "../styles/Hero.css"
import { Link } from "react-router-dom"

import Header from "./Header";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-img">
                <Header isOnHero={true} />
                <div className="hero-info">
                    <div>
                        <p className="overline">New product</p>
                        <h1>XX99 Mark II Headphones</h1>
                        <p className="description">  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Link to="/product/3" state={{productId: 3}} className="btn primary-btn">See product</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;