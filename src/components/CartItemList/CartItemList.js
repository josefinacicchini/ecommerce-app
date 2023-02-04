import "./CartItemList.css";
import { FaTrashAlt } from "react-icons/fa";

const CartItemList = ({ cart, onRemoveItem, totalAmount }) => {
  return (
    <>
      {cart.map((item) => (
        <div className="items-container" key={item.id}>
          <h4 className="item-name">{item.name}</h4>
          <p className="item-cant">Cantidad: {item.cantidad} </p>
          <p className="item-price">
            Precio:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "ARS",
            }).format(item.price * item.cantidad)}
          </p>
          {onRemoveItem && (
            <button
              className="remove-item-button"
              onClick={() => onRemoveItem(item.id)}
            >
              <FaTrashAlt />
            </button>
          )}
        </div>
      ))}
      <h3 className="total-price">
        Total:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "ARS",
        }).format(totalAmount())}
      </h3>
    </>
  );
};

export default CartItemList;
