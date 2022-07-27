import { ScreenSizeContext } from "../App.js"
import "../styles/Gallery.css"

function Gallery({productData}) {
    const { slug, gallery } = productData
    return (
        <div className='gallery'>
            <ScreenSizeContext.Consumer>
                {screenSize =>
                       (
                        <div className="gallery">
                            <img src={require(`../assets/product-${slug}/${screenSize}/image-gallery-1.jpg`)} alt=""className="img gallery-img" />
                            <img src={require(`../assets/product-${slug}/${screenSize}/image-gallery-2.jpg`)} alt="" className="img gallery-img" />
                            <img src={require(`../assets/product-${slug}/${screenSize}/image-gallery-3.jpg`)} alt="" className="img gallery-img" />
                        </div>
                        )
                }
            </ScreenSizeContext.Consumer>
        </div>
    )
}

export default Gallery
