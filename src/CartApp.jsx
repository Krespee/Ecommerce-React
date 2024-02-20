import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ShoppingPage } from "./pages/ShoppingPage"
import { CartPage } from "./pages/CartPage"
import { ProductsProvider } from "./context/ProductsProvider"
import { CartProvider } from "./context/CartProvider"

export const CartApp = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/"  element={<ShoppingPage/>}></Route>
            <Route path="/cart"  element={<CartPage/>}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  )
}
