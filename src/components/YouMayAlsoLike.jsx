import { Link } from 'react-router-dom';
import { ScreenSizeContext } from "../App";

import data from '../assets/data.json'

import '../styles/YouMayAlsoLike.css'


function YouMayAlsoLike({ products }) {
    const productsElem = products.map(({slug, name, image},i) => {
        let product = data.find(pro => pro.slug === slug)
        let id = product?.id;
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
        state={{productId: id && id}}>
            <button className="btn primary-btn">See product</button>
        </Link>
    </div>
    )})
    return (
        <section className="you-may-also-like">
            <h3>You may also like</h3>
            <div className="other-products container">
                {productsElem}
            </div>
        </section>
    )
}

export default YouMayAlsoLike
