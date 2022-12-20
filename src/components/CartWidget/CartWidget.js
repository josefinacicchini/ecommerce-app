import {CgShoppingCart} from "react-icons/cg";
import './CartWidget.css';

const CartWidget = () => {
    return(
    <div className="cart-widget">
        <CgShoppingCart />
        <p>(0)</p>
    </div> 
    )
}

export default CartWidget