import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemList from "../CartItemList/CartItemList";

const Cart = () => {
  const { cart, emptyCart, totalAmount, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h3>Ups! Tu carrito está vacío</h3>

        <div className="buttons-container">
          <Link className="cart-button" to="/">
            Ir a comprar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu compra</h2>

      <CartItemList
        cart={cart}
        onRemoveItem={removeItem}
        totalAmount={totalAmount}
      />

      <div className="buttons-container">
        <button className="empty-cart-button" onClick={emptyCart}>
          Vaciar carrito
        </button>

        <Link className="cart-button" to="/">
          Seguir comprando
        </Link>

        <Link className="cart-button" to="/checkout">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
