import { Link } from "react-router-dom";
import './Nav.scss'

export const Navbar = () => {
return (
    <nav id="nav-section">
        <ul id="link-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Posters">Posters</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
        <div id="logo-container">
            <img src="src/assets/logo/Logo.svg" alt="" />
        </div>
        <ul id="link-right">
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/">Basket</Link></li>
        </ul>
    </nav>
)
};