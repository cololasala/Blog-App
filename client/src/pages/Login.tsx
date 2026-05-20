import { isAxiosError } from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorForm, setErrorForm] = useState<string>("");
  const { login } = useContext(AuthContext);

  const disabled = () => {
    return !formData.email || !formData.password;
  };

  const updateDataForm = (value: string, key: string) => {
    setFormData((old) => ({ ...old, [key]: value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = formData;
    const requestBody = {
      email,
      password,
    };
    try {
      await login(requestBody);
      setErrorForm("");
      navigate("/");
    } catch (error: any) {
      if (isAxiosError(error)) {
        setErrorForm(error?.response?.data.message ?? "Error");
      }
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <form>
        <input
          required
          name="email"
          placeholder="Enter email"
          type="email"
          onChange={(e) => updateDataForm(e.target.value, "email")}
        />
        <div style={{ display: "flex", width: "100%", gap: 5 }}>
          <input
            style={{ flex: 1 }}
            required
            name="password"
            placeholder="Enter password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => updateDataForm(e.target.value, "password")}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🚫" : "👁️"}
          </button>
        </div>

        {errorForm && <p className="error-form">{errorForm}</p>}

        <button
          style={{ backgroundColor: disabled() ? "#86dddd" : "" }}
          type="submit"
          name="login"
          onClick={onSubmit}
        >
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
