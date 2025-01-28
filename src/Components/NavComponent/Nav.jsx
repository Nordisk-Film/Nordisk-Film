import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import './Nav.scss'

export const Navbar = () => {
return (
    <nav id="nav-section">
        <ul id="link-left">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Posters">Posters</NavLink></li>
            <li><NavLink to="/">About</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
        </ul>
        <div id="logo-container">
            <NavLink to="/"><img src="src/assets/logo/Logo.svg" alt="" /> </NavLink>
        </div>
        <ul id="link-right">
            <li><Link to="/">Log In <img src="src/assets/images/AccountLogo.svg" alt="Account logo" /></Link></li>
            <li><Link to="/">Basket <img src="src/assets/images/CartLogo.svg" alt="Cart Logo" /></Link></li>
        </ul>
    </nav>
)
};