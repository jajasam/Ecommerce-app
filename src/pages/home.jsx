import "../App.css"

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Categories  />
            <FeaturedProducts />
            <BestGear />
            <Footer />
        </>
    )
}

export default Home;
