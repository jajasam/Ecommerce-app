import { useLocation } from "react-router-dom"

import "../App.css"

import Header from "../components/Header"
import ProductDetails from "../components/ProductDetails"
import Gallery from "../components/Gallery"
import Recommendations from "../components/Recommendations"
import Categories from "../components/Categories"
import BestGear from "../components/BestGear"
import Footer from "../components/Footer"

import data from "../assets/data.json"

function ProductPage() {
    const location = useLocation();
    const productId = location.state.productId;

    const productData = data.find(product => product.id === productId)

    return (
        <div className="content">
            <Header />
            <div className="breadcrumbs">
                go back
            </div>
            <ProductDetails productData={productData} />
            <Gallery productData={productData} />
            <Recommendations productData={productData} />
            <Categories />
            <BestGear />
            <Footer />

        </div>
    )
}

export default ProductPage;
