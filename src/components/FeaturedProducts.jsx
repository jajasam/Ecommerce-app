import { Link } from "react-router-dom";

import { ScreenSizeContext } from "../App"

import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
    return (
        <ScreenSizeContext.Consumer>
            {screenSize => (
                <div className="products">
                    <div id="ZX9-speaker">
                        <img className="img" id="ZX9-speaker_img" src={require(`../assets/home/${screenSize}/image-speaker-zx9.png`)} alt="ZX9 speaker" />
                        <div>
                            <h2>ZX9 speaker</h2>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Link to="/product/6" state={{productId: 6}}>
                                <button className="btn primary-btn">See product</button>
                            </Link>
                        </div>
                    </div>
                    <div 
                        id="ZX7-speaker" 
                        style={{backgroundImage: `url(${require(`../assets/home/${screenSize}/image-speaker-zx7.jpg`)})` }}>
                        <div>
                            <h3>ZX7 speaker</h3>
                            <Link to="/product/5" state={{productId: 5}}>
                                <button className="btn secondary-btn">See product</button>
                            </Link>
                        </div>
                    </div>
                    <div id="YX1-earphones">
                        <img className="img" id="YX1-earphones_img" src={require(`../assets/home/${screenSize}/image-earphones-yx1.jpg`)} alt="YX1 earphones" />
                        <div className="product-infos">
                            <div>
                            <h3>YX1 earphones</h3>
                            <Link to="/product/1" state={{productId: 1}}>
                                <button className="btn secondary-btn">See product</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </ScreenSizeContext.Consumer>
    )
}

export default FeaturedProducts
