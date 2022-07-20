function ProductDetails({productData}) {
    const { id, name, description, price, image, features, includes } = productData;

    return (
        <div>
            <div>
            <div className="img"></div>
            <div className="product-infos">
                <div>
                {productData.new && <h4>New product</h4>}
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <input type="number" name="" id="" />
                <button className="btn primary-btn">Add to cart</button>
                </div>
            </div>
            <div className="features">
                <h4>Features</h4>
                {/* <p>{features}</p> */}
            </div>
            <div className="in-the-box">
                <h4>In the box</h4>
                {/* <p>{includes}</p> */}
            </div>
            </div>
        </div>
    )
}

export default ProductDetails
