import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
    return (
        <div className="products">
            <div id="ZX9-speaker">
            <span className="img" id="ZX9-speaker_img"></span>
            <div>
                <h2>ZX9 speaker</h2>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="btn">See product</button>
            </div>
            </div>
            <div id="ZX7-speaker">
            <div>
                <h3>ZX7 speaker</h3>
                <button className="btn secondary-btn">See product</button>
            </div>
            </div>
            <div id="YX1-earphones">
            <div className="img" id="YX1-earphones_img"></div>
            <div className="product-infos">
                <div>
                <h3>YX1 earphones</h3>
                <button className="btn secondary-btn">See product</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FeaturedProducts
