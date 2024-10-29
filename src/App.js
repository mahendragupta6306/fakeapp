import "./App.css";
import Header from "./container/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProductListing />
          <Routes>
            <Route path="/" exact component={<ProductListing />} />
            <Route path="/product/:productId" component={<ProductDetails />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
