import "../App.css"

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import BestGear from "../components/BestGear";

function Home() {
    return (
        <>
            <Hero />
            <Categories  />
            <FeaturedProducts />
            <BestGear />
        </>
    )
}

export default Home;
