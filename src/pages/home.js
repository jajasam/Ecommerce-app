import "../App.css"

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="content">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <BestGear />
            <Footer />
        </div>
    )
}

export default Home
