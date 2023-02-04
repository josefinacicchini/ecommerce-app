import "./LoginScreen.css";
import logo from "../../img/brand-logo.png";
import { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const { login, user } = useContext(LoginContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  return (
    <div className="login-screen">
      <div className="login-form-container">
        <div className="login-header">
          <img className="brand-logo" src={logo} alt="brand logo" />
          <h3 className="pawsome-welcome">
            Bienvenido a la tienda de Pawsome!
          </h3>
        </div>
        <p>Ingresa tus datos para comenzar a comprar:</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type={"email"}
            value={values.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Email"
          />
          <input
            className="form-input"
            type={"password"}
            value={values.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Password"
          />
          <button className="login-form-button">Ingresar</button>

          {user.error && <p className="error">{user.error}</p>}
        </form>
        <h4 className="register-message">Primera vez en la tienda?</h4>
        <Link className="link" to="/register">
          Registrarme
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
