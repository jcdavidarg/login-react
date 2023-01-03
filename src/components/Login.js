function Login() {
  return (
    <>
      <h2>Formulario de Login</h2>
      <form>
        <label>
          <span>EMAIL</span>
          <input type="email" name="email" />
        </label>

        <input type="password" name="password" />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
