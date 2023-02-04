import "./ItemCount.css";

const ItemCount = ({ cantidad, setCantidad, stock, onAdd }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="item-count-container">
      <p>Agregar productos</p>
      <div className="counter">
        <button onClick={handleRestar}>-</button>
        <p className="counter-display">{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <p>Disponibles: {stock}</p>
      <button className="add-to-cart-button" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
