import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "../Pages/Products";
import ProductShowPage from "../Pages/ProductShow";
import { ProductsContextProvider } from "../Context/ProductContext";

export const RoutesMap = () => {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductShowPage />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
  );
};
