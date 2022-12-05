import './App.css';
import { useState, createContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/category";
import ProductPage from "./pages/product";
import Cart from "./pages/cart";

import Footer from "./components/Footer";

export const ScreenSizeContext = createContext()

function App() {
  const [screenSize, setScreenSize] = useState(screenSizeName(window.innerWidth));
  const [cart, setCart] = useState([
    {
        "productData": {
            "id": 4,
            "slug": "xx99-mark-two-headphones",
            "name": "XX99 Mark II Headphones",
            "image": {
                "mobile": "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
                "tablet": "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
                "desktop": "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
            },
            "category": "headphones",
            "categoryImage": {
                "mobile": "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
                "tablet": "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
                "desktop": "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            },
            "new": true,
            "price": 2999,
            "description": "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
            "features": "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
            "includes": [
                {
                    "quantity": 1,
                    "item": "Headphone unit"
                },
                {
                    "quantity": 2,
                    "item": "Replacement earcups"
                },
                {
                    "quantity": 1,
                    "item": "User manual"
                },
                {
                    "quantity": 1,
                    "item": "3.5mm 5m audio cable"
                },
                {
                    "quantity": 1,
                    "item": "Travel bag"
                }
            ],
            "gallery": {
                "first": {
                    "mobile": "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
                    "tablet": "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
                    "desktop": "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
                },
                "second": {
                    "mobile": "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
                    "tablet": "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
                    "desktop": "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
                },
                "third": {
                    "mobile": "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
                    "tablet": "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
                    "desktop": "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
                }
            },
            "others": [
                {
                    "slug": "xx99-mark-one-headphones",
                    "name": "XX99 Mark I",
                    "image": {
                        "mobile": "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                        "tablet": "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                        "desktop": "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
                    }
                },
                {
                    "slug": "xx59-headphones",
                    "name": "XX59",
                    "image": {
                        "mobile": "./assets/shared/mobile/image-xx59-headphones.jpg",
                        "tablet": "./assets/shared/tablet/image-xx59-headphones.jpg",
                        "desktop": "./assets/shared/desktop/image-xx59-headphones.jpg"
                    }
                },
                {
                    "slug": "zx9-speaker",
                    "name": "ZX9 Speaker",
                    "image": {
                        "mobile": "./assets/shared/mobile/image-zx9-speaker.jpg",
                        "tablet": "./assets/shared/tablet/image-zx9-speaker.jpg",
                        "desktop": "./assets/shared/desktop/image-zx9-speaker.jpg"
                    }
                }
            ]
        },
        "quantity": 1
    },
    {
        "productData": {
            "id": 1,
            "slug": "yx1-earphones",
            "name": "YX1 Wireless Earphones",
            "image": {
                "mobile": "./assets/product-yx1-earphones/mobile/image-product.jpg",
                "tablet": "./assets/product-yx1-earphones/tablet/image-product.jpg",
                "desktop": "./assets/product-yx1-earphones/desktop/image-product.jpg"
            },
            "category": "earphones",
            "categoryImage": {
                "mobile": "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
                "tablet": "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
                "desktop": "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
            },
            "new": true,
            "price": 599,
            "description": "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
            "features": "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
            "includes": [
                {
                    "quantity": 2,
                    "item": "Earphone unit"
                },
                {
                    "quantity": 6,
                    "item": "Multi-size earplugs"
                },
                {
                    "quantity": 1,
                    "item": "User manual"
                },
                {
                    "quantity": 1,
                    "item": "USB-C charging cable"
                },
                {
                    "quantity": 1,
                    "item": "Travel pouch"
                }
            ],
            "gallery": {
                "first": {
                    "mobile": "./assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
                    "tablet": "./assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
                    "desktop": "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
                },
                "second": {
                    "mobile": "./assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
                    "tablet": "./assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
                    "desktop": "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
                },
                "third": {
                    "mobile": "./assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
                    "tablet": "./assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
                    "desktop": "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
                }
            },
            "others": [
                {
                    "slug": "xx99-mark-one-headphones",
                    "name": "XX99 Mark I",
                    "image": {
                        "mobile": "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                        "tablet": "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                        "desktop": "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
                    }
                },
                {
                    "slug": "xx59-headphones",
                    "name": "XX59",
                    "image": {
                        "mobile": "./assets/shared/mobile/image-xx59-headphones.jpg",
                        "tablet": "./assets/shared/tablet/image-xx59-headphones.jpg",
                        "desktop": "./assets/shared/desktop/image-xx59-headphones.jpg"
                    }
                },
                {
                    "slug": "zx9-speaker",
                    "name": "ZX9 Speaker",
                    "image": {
                        "mobile": "./assets/shared/mobile/image-zx9-speaker.jpg",
                        "tablet": "./assets/shared/tablet/image-zx9-speaker.jpg",
                        "desktop": "./assets/shared/desktop/image-zx9-speaker.jpg"
                    }
                }
            ]
        },
        "quantity": 1
    }
]);
  const [total, setTotal] = useState(0) 

  window.addEventListener("resize", function() {
    setScreenSize(screenSizeName(window.innerWidth))
  })

  function screenSizeName(innerWidth) {
    if (innerWidth > 1100) return "desktop";
    if (innerWidth >= 500) return "tablet";
    if (innerWidth < 500) return "mobile";
  }

  function addToCart(productData, quantity) {
    setCart(cart => [
      ...cart,
      {productData, quantity}
    ])
  }
  console.log(cart)

  function removeFromCart(productId) {
    console.log("remove item")
    // setCart(prev => [
    //   prev.filter(item => item.id !== productId)
    // ])
  }

  useEffect(() => {
    const newTotal = cart.reduce((acc, cur) => (cur.productData.price * cur.quantity) + acc,0);
    setTotal(newTotal)
  }, [cart])

  return (
    <div className="app">
      <ScreenSizeContext.Provider value={screenSize}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} total={total} removeFromCart={removeFromCart} />} />
          </Routes>
        </ScreenSizeContext.Provider>
        <Footer />
    </div>
  );
}

export default App;