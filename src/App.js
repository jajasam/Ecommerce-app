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
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0) 

  window.cart = cart;
  window.total = total;

  window.addEventListener("resize", function() {
    setScreenSize(screenSizeName(window.innerWidth))
  })

  function screenSizeName(innerWidth) {
    if (innerWidth > 1100) return "desktop";
    if (innerWidth >= 500) return "tablet";
    if (innerWidth < 500) return "mobile";
  }

  function updateCart(productData, quantity) {
    //update product quantity
    if (cart.find(product => product.productData.id === productData.id)) {
        setCart(prevCart =>
            prevCart.map(product => {
            if (product.productData.id === productData.id) {
                return {...product, quantity};
            }
            return product;
            }),
      );
    } else {
        //add product to cart
        setCart(cart => [
            ...cart,
            {productData, quantity}
        ])
    }
  }

  function removeFromCart(productId) {
    setCart(prevCart =>
        prevCart.filter(product => {
          return product.productData.id !== productId;
        }),
      );
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
            <Route path="/product/:productId" element={<ProductPage updateCart={updateCart} />} />
            <Route path="/cart" element={<Cart cart={cart} total={total} removeFromCart={removeFromCart} />} />
          </Routes>
        </ScreenSizeContext.Provider>
        <Footer />
    </div>
  );
}

export default App;