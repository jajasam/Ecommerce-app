import { ScreenSizeContext } from "../App.js"
import "../styles/Gallery.css"

function Gallery({productData}) {
    const { name, slug, gallery } = productData

    return (
    <>
        <section className="gallery container">
            <ScreenSizeContext.Consumer>
                {
                    screenSize => <>
                    <div className="left">
                        <img 
                         src={require(`../assets/product-${slug}/${screenSize}/image-gallery-1.jpg`)} 
                         alt={name}
                        />
                        <img 
                         src={require(`../assets/product-${slug}/${screenSize}/image-gallery-2.jpg`)} 
                         alt={name}
                        />
                    </div>
                    <div className="right">
                        <img 
                        src={require(`../assets/product-${slug}/${screenSize}/image-gallery-3.jpg`)} 
                        alt={name}
                        />
                    </div>
                </>
                }
            </ScreenSizeContext.Consumer>
        </section>
    </>
    )
}

export default Gallery
