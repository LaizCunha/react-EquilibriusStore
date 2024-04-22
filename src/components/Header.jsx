import { Link } from "react-router-dom";
import "./Header.css"
import icon from "../assets/icon.png"

function Header() {
    return (
      <>
        <nav className="navbar">
          <div className="icon">
              <Link to="/"><img src={icon} alt="Logo" /></Link>
            </div>
          <ul className="list">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
            <Link to="/products">Products</Link>
            </li>
            <li className="item"> 
            <Link to="/checkout">Checkout</Link>
            </li>
        </ul>
    </nav> 
      </>
    )
}

export default Header;