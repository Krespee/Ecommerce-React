import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/main.css"

export const NavBar = () => {
  const {shoppingList } = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          Ecommerce
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page" href="#">
                Shopping
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <Badge color="secondary" badgeContent={shoppingList.length}>
              <ShoppingCart color="action"/>
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
