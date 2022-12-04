import "../styles/BestGear.css"

import { ScreenSizeContext } from "../App"

function BestGear() {
    return (
        <section className="best-gear container">
            <div className="business-purpose-text">
            <h2>Bringing you the <span>best</span> audio gear</h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of our products. Stop by our store 
              to meet some of the fantastic people who make Audiophile the best place to buy your portable 
              audio equipment.
            </p>
        </div>
        <ScreenSizeContext.Consumer> 
            {screenSize => (
                <img className="img best-gear-img" src={require(`../assets/shared/${screenSize}/image-best-gear.jpg`)} alt="Best gear" />
            )}
        </ScreenSizeContext.Consumer>
        </section>
    )
}

export default BestGear;
