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

    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(() => {
        const products = data.filter(elem => elem.category === category);
        let newProducts = [];
        let oldProducts = [];

        //filter array to make new products appear first
        for (let i = 0; i < products.length; i++) {
            if (products[i].new) {
                newProducts.push(products[i]);
            } else {
                oldProducts.push(products[i]);
            }
        }
        setFilteredProducts(newProducts.concat(oldProducts));
    }, [location])

 
    return (
        <>
            <Header displayCategory={true} />
            <div className="products_container">
                {filteredProducts && filteredProducts.map((product, i) => <ProductOverview productData={product} key={i} isOdd={i % 2 !== 0 ? true : false} />)}
            </div>
            <Categories />
            <BestGear />
            <Footer />
        </>
    )
}

export default Category;
