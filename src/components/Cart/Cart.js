import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {FaTrashAlt} from "react-icons/fa"
import { Link } from "react-router-dom"
import './Cart.css'


const Cart = () => {
    const {cart, emptyCart, totalAmount, removeItem} = useContext(CartContext)
    

    return (
        <div className="cart-container">
            <h2>Tu compra</h2>
            {cart.map(item=>
                <div className='item-container' key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(item.price * item.cantidad)}</p>
                    <button className='remove-item-button' onClick={() => removeItem(item.id)}> <FaTrashAlt /> </button>
                </div>
                )}
            
            <h3>Total: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'ARS'}).format(totalAmount())}</h3>
            <div className="buttons-container">
                { cart.length>0 && <button className="empty-cart-button" onClick={emptyCart}>Vaciar carrito</button>}
                
                <Link className='cart-button' to='/'>Seguir comprando</Link>

                { cart.length>0 && <Link className="cart-button" to="/checkout">Finalizar compra</Link>}
            </div>
        </div>
    )
}

export default Cart