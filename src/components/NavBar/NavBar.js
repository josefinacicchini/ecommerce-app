import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import Tooltip from "@mui/material/Tooltip";
import image from '../../img/brand-logo-white.png';
import { Link } from "react-router-dom";
import { IoPaw } from "react-icons/io5";
import { BiTennisBall, BiBone } from "react-icons/bi";
import { RiZzzFill } from "react-icons/ri";
import { GiSoap } from "react-icons/gi";
import { useLoginContext } from '../../context/LoginContext';

const NavBar = () => {
    const {user, logout} = useLoginContext()

    return(
        <div className='navbar-container'>
            <header className="header-container">
                <div className="brand">
                    <img src={image} alt="brand logo" />
                    <Link className="brand-name" to={'/'}>Pawsome</Link>
                </div>
        
                <nav className="nav-container">
                    <div className="links-container">
                        
                        <Tooltip title="Paseo">
                            <Link className="nav-link" to={'/productos/Paseo'}>
                                <IoPaw/>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Alimentación">
                            <Link className="nav-link" to={'/productos/Alimentación'}>
                                <BiBone/>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Descanso">
                            <Link className="nav-link" to={'/productos/Descanso'}>
                                <RiZzzFill/>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Higiene">
                            <Link className="nav-link" to={'/productos/Higiene'}>
                                <GiSoap/>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Juego">
                            <Link className="nav-link" to={'/productos/Juego'}>
                                <BiTennisBall/>
                            </Link>
                        </Tooltip>

                        {/* <Link className="nav-link" to={'/'}>HOME</Link> */}
                        {/* <Link className="nav-link" to={'/contact'}>CONTACT</Link> */}


                    </div>
                    <CartWidget />
                </nav>
            </header>
            <div className='login-logout-container'>
                        <p>Bienvenido {user.email}</p>
                        <button className='logout-button' onClick={logout}>Logout</button>
            </div>
        </div>
    )
}


export default NavBar;