import './App.css';
import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/category";
import ProductPage from "./pages/product"

export const ScreenSizeContext = createContext()

function App() {
  const [screenSize, setScreenSize] = useState(screenSizeName(window.innerWidth))

  window.addEventListener("resize", function() {
    setScreenSize(screenSizeName(window.innerWidth))
  })

  function screenSizeName(innerWidth) {
    if (innerWidth > 1100) return "desktop"
    if (innerWidth >= 500) return "tablet"
    if (innerWidth < 500) return "mobile"
  }


  return (
    <div className="app">
      <ScreenSizeContext.Provider value={screenSize}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        </ScreenSizeContext.Provider>
    </div>
  );
}

export default App;