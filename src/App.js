import React from "react";
import "./App.css";
import ButtonsComponent from "./StyledComponents/ButtonsComponent";
import TableComponent from "./StyledComponents/TableComponent";
import ProductsComponent from "./Products/ProductsComponent";
import ProductGrid from "./Products/ProductGrid";
import ProductListWithStyles from "./Products/ProductListWithStyles";
function App() {
  return (
    <div>
      <ProductListWithStyles />
    </div>
  );
}

export default App;
