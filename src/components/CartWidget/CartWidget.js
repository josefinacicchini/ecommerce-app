import { useContext } from "react";
import {CgShoppingCart} from "react-icons/cg";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css';

const CartWidget = () => {

    const {totalCart} = useContext(CartContext)
    
    return(
      <Link to={'/cart'} className='cart-widget'>
        <CgShoppingCart />
        <p className="cart-counter">{totalCart()}</p>
      </Link>
    )
}

export default CartWidget

