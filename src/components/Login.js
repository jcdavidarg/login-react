import "../stylesheet/Login.css";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      swAlert(<h2>Los campos no pueden estar vacios</h2>);
    } else if (email !== "" && !regexEmail.test(email)) {
      swAlert(
        <h2>Debes escribir una dirección de correo electrónico válida</h2>
      );
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h2>Credenciales inválidas</h2>);
    } else {
      axios
        .post("http://challenge-react.alkemy.org", { email, password })
        .then((res) => {
          swAlert(<h2>Perfecto, ingresaste correctamente</h2>);
          const tokenRecibido = res.data.token;
          localStorage.setItem("token", tokenRecibido);
        });
    }
  };

  return (
    <div className="contenedor-login">
      <h2>FORMULARIO DE LOGIN</h2>
      <form onSubmit={submitHandler} className="formulario-contenedor">
        <label>EMAIL</label>
        <input type="text" name="email" />
        <label>CONTRASEÑA</label>
        <input type="password" name="password" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
