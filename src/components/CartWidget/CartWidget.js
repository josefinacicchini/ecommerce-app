import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalCart, cart } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <Link to={"/cart"} className="cart-widget">
        <CgShoppingCart />
        <p className="cart-counter">{totalCart()}</p>
      </Link>
    );
  }
};

export default CartWidget;
