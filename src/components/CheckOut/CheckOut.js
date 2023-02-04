import "./CheckOut.css";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import CartItemList from "../CartItemList/CartItemList";

const CheckOut = () => {
  const { cart, totalAmount, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      client: values,
      items: cart,
      total: totalAmount(),
      date: new Date(),
    };
    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then((doc) => {
        setOrderId(doc.id);
        emptyCart();
      })
      .catch((error) => console.log(error));
  };

  if (orderId) {
    return (
      <div className="checkout-message">
        <h2 className="">Tu compra ha sido exitosa!</h2>
        <p className="checkout-code"> Tu código de compra es: {orderId}</p>
        <Link className="checkout-return-button" to="/">
          Volver
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Terminar mi compra</h2>

      <CartItemList cart={cart} totalAmount={totalAmount} />

      <form className="checkout-form-container" onSubmit={handleSubmit}>
        <h4 className="form-title">Completá tus datos</h4>
        <input
          onChange={handleInputChange}
          type="text"
          name="nombre"
          value={values.nombre}
          placeholder="Tu nombre"
        />
        <input
          onChange={handleInputChange}
          type="text"
          name="direccion"
          value={values.direccion}
          placeholder="Tu dirección"
        />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          value={values.email}
          placeholder="Tu email"
        />
        <button className="checkout-form-button">Enviar</button>
      </form>
    </div>
  );
};

export default CheckOut;
