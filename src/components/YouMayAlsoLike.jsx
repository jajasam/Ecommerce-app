import { Link } from 'react-router-dom';
import { ScreenSizeContext } from "../App";

import '../styles/YouMayAlsoLike.css'


function YouMayAlsoLike({ products, data }) {
    const productsElem = products.map(({slug, name, image},i) => {
        const product = data.filter(product => product.name === name)
        const id = product[0]?.id
    return (
    <div key={i}>
        <ScreenSizeContext.Consumer>
            {
                screenSize => 
                ( 
                    <img 
                    src={require(`../assets/product-${slug}/${screenSize}/image-category-page-preview.jpg`)} 
                    alt={name} />
                )
            }
        </ScreenSizeContext.Consumer>
        <h5>{name}</h5>
        <Link 
         to={`/product/${id && id}`} 
        state={{productId: id}}>
            <button className="btn primary-btn">See product</button>
        </Link>
    </div>
    )})
    return (
        <>
        <h3>You may also like</h3>
        <div className="other-products container">
            {productsElem}
        </div>
        </>
    )
}

export default YouMayAlsoLike
