import { useState, useEffect } from "react";

function Login() {

  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

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

  return (
    <>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={onEmailChange}/>
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" onChange={onPasswordChange}/>
          </div>
          <button type="submit" disabled={!formValid}>Entrar</button>
        </form>
      </div>
    </>
  )
}

export default Login;