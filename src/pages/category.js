import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import data from "../assets/data.json";

import "../App.css";

import Header from "../components/Header";
import ProductOverview from "../components/ProductOverview"
import BestGear from "../components/BestGear";
import Categories from "../components/Categories";
import Footer from "../components/Footer";


function Category() {
    const location = useLocation();
    const category = location.state.category;

    const [products, setProducts] = useState();

    console.log(data)

    useEffect(() => {
        setProducts(data.filter(elem => elem.category === category))
    }, [location])

    return (
        <div className="content">
            <Header displayCategory={true} />
            <div className="products_container">
                {products && products.map((product, i) => <ProductOverview productData={product} key={i} isOdd={i % 2 != 0 ? true : false} />)}
            </div>
            <Categories />
            <BestGear />
            <Footer />
        </div>
    )
}

export default Category;
