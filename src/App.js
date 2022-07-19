import './App.css';
import { Routes, Route } from "react-router-dom";

import data from "./assets/data.json";

import Home from "./pages/home";
import Category from "./pages/category";

function App() {
  console.log(data)

  function filterByCategory(categoryName) {
    return data.filter(elem => elem.category === categoryName);
  }



  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category/>} />
        {/* <Route path="/products/:product" element={<Product />} /> */}
      </Routes>
    </div>
  );
}

export default App;
