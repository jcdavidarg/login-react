import "../stylesheet/Login.css";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      console.log("Los campos no pueden estar vacios");
    }
  };

  return (
    <div className="contenedor-login">
      <h2>FORMULARIO DE LOGIN</h2>
      <form onSubmit={submitHandler} className="formulario-contenedor">
        <label>EMAIL</label>
        <input type="email" name="email" />
        <label>CONTRASEÑA</label>
        <input type="password" name="password" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
