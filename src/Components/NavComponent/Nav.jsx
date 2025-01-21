import { Link } from "react-router-dom";
import './Nav.scss'

export const Navbar = () => {
return (
  <>
    <nav>
        <ul>
            <li><Link to="/"></Link></li>
            <li><Link id="verdensMålene" to="/side2">VERDENS MÅLENE</Link></li>
            <li><Link to="/undervisning">UNDERVISNING</Link></li>
            <li><Link to="/">BYG DIT EJET MÅL</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">KONTAKT OS</Link></li>
        </ul>
    </nav>
    </>
)
};