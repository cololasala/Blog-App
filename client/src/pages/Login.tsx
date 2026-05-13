import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h2>Login</h2>
      <form>
        <input
          required
          name="username"
          placeholder="Enter email"
          type="email"
        />
        <input
          required
          name="password"
          placeholder="Enter password"
          type="password"
        />
        <button type="submit" name="login">
          Login
        </button>

        <span>
          Don't you have an account?
          <Link to="/register" className="register-link">
            Register here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
