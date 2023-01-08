import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import image from '../../img/brand-logo.png'

const NavBar = () => {
    return(
        <nav>
            <div className="brand">
                <img src={image} alt="brand logo"/>
                <p>PAWSOME</p>
            </div>
            <div className="links-container">
                <a href="">HOME</a>
                <a href="">SHOP</a>
                <a href="">CONTACT</a>
                <CartWidget />
            </div>
        </nav>
    )
}


export default NavBar;