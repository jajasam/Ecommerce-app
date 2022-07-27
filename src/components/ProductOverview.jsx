import { Link } from "react-router-dom"

import "../styles/ProductOverview.css";
import "../App.css"
import { ScreenSizeContext } from "../App";

function Product({productData, isOdd}) {
    const {id, name, description, slug} = productData;

    return (
        <div className={`product ${isOdd ? 'reverse' : ''}`}>
            <ScreenSizeContext.Consumer>
                {screenSize => 
                    ( 
                        <img src={require(`../assets/product-${slug}/${screenSize}/image-category-page-preview.jpg`)} alt={name} className="img" />
                    )}
            </ScreenSizeContext.Consumer>
            <div className="product-infos">
                <div>
                {productData.new && <h4>New product</h4>}
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/product/${id}`} state={{productId: id}}><button className="btn primary-btn">See product</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Product
