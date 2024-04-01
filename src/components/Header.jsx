import { Link } from "react-router-dom";
import "./Header.css"
import icon from "../assets/icon.png"

function Header() {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <img className="logo" src={icon}></img>
              <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/checkout">Checkout</Link>
              </ul>
          </div>
        </nav>      
      </>
    )
}

export default Header;