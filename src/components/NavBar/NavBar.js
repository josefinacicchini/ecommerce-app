import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <a href="">HOME</a>
            <a href="">SHOP</a>
            <a href="">CONTACT</a>
            <CartWidget />
            
        </nav>
    )
}


export default NavBar;