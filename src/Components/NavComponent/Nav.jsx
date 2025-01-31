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
            <Link to="/"><img src="src/assets/logo/Logo.svg" alt="" /> </Link>
        </div>
        <ul id="link-right">
            <li><Link to="/">Log In <img src="src/assets/images/AccountLogo.svg" alt="Account logo" /></Link></li>
            <li><Link to="/">Basket <img src="src/assets/images/CartLogo.svg" alt="Cart Logo" /></Link></li>
        </ul>
    </nav>
)
};