import { useLocation } from "react-router-dom"

import "../App.css"

import Header from "../components/Header"
import ProductDetails from "../components/ProductDetails"
import Gallery from "../components/Gallery"
import Categories from "../components/Categories"
import BestGear from "../components/BestGear"
import Footer from "../components/Footer"

import data from "../assets/data.json"

function ProductPage({updateCart}) {
    const location = useLocation();
    const productId = location.state.productId;

    const productData = data.find(product => product.id === productId)

    return (
        <>
            <Header />
            <ProductDetails 
                key={productData.id} 
                productData={productData} 
                updateCart={updateCart} />
            <Gallery 
                productData={productData} />
            <Categories />
            <BestGear />
            <Footer />

        </>
    )
}

export default ProductPage;
