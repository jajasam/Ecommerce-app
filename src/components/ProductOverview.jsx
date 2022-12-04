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
                        <img 
                        src={require(`../assets/product-${slug}/${screenSize}/image-category-page-preview.jpg`)} 
                        alt={name} />
                    )}
            </ScreenSizeContext.Consumer>
            <div className="product-infos">
                {
                    productData.new && 
                    <p className="overline">New product</p>
                }
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/product/${id}`} state={{productId: id}}>
                    <button className="btn primary-btn">See product</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
