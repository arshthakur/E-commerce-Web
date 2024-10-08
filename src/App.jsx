import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemeToggle from "./components/theme/ThemeToggle.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import "./App.css";
import { HashRouter } from "react-router-dom";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <header>
        <h1>E-Commerce Store</h1>
        <ThemeToggle />
        <SearchBar onSearch={handleSearch} />
      </header>
      <ProductList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
