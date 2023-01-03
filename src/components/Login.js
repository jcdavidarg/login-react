import "../stylesheet/Login.css";

function Login() {
  return (
    <div className="contenedor-login">
      <h2>FORMULARIO DE LOGIN</h2>
      <form className="formulario-contenedor">
        <label for="email">EMAIL</label>
        <input type="email" id="email" name="email" />
        <label for="password">CONTRASEÑA</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
