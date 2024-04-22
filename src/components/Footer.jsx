import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import "./Footer.css"

function Footer() {
    return(
        <footer className='footer'>
        <ul className='social_list'>
          <li>
            <FaFacebook></FaFacebook>
          </li>
          <li>
            <FaInstagram></FaInstagram>
          </li>
          <li>
            <FaLinkedin></FaLinkedin>
          </li>
        </ul>
        <p className='copy_right'>
          <span>Equilibrius </span>&copy; 2024
        </p>
      </footer>
    )
}

export default Footer;