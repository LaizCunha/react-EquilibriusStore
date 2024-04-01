import '../pages/Login.css';
import banner from "../assets/banner.png"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Footer from "../components/Footer"

function Login() {

  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const redirect = useNavigate();


  const onEmailChange = (e) => {
    let email = e.target.value;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(regexEmail.test(email));
  };

  const onPasswordChange = (e) =>  {
    let password = e.target.value;
    setPasswordValid(password.length >= 8);
  };

  useEffect(() => {
    setFormValid(emailValid && passwordValid)
  }, [emailValid,passwordValid]);

  function showProducts() {
    redirect('/products');
  }

  return (
    <>
      <div className='container-login'>
        <div className="logo">
          <img id='banner' src={banner} alt="logo equilibrius" />
        </div>
        <div className="login">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" onChange={onEmailChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha: </label>
              <input type="password" id="senha" onChange={onPasswordChange}/>
            </div>
            <button type="submit" onClick={showProducts} disabled={!formValid}>Entrar</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login;