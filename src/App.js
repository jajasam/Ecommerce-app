import './App.css';
import { useState, createContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/category";
import ProductPage from "./pages/product";
import Cart from "./pages/cart";

export const ScreenSizeContext = createContext()

function App() {
  const [screenSize, setScreenSize] = useState(screenSizeName(window.innerWidth));
  const [cart, setCart] = useState([]);
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
    </div>
  );
}

export default App;