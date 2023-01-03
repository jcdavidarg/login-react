import "../stylesheet/Login.css";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      console.log("Los campos no pueden estar vacios");
    } else if (email !== "" && !regexEmail.test(email)) {
      console.log("Debes escribir una dirección de correo electrónico válida");
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Credenciales inválidas");
    } else {
      console.log("Estamos listos para enviar la información");
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
