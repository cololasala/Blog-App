import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios, { isAxiosError } from "axios";

interface IRegister {
  username: string;
  email: string;
  password: string;
}

const BASE_URL = "/api/auth";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IRegister>({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorForm, setErrorForm] = useState<string>("");

  const updateDataForm = (value: string, key: string) => {
    setFormData((old) => ({ ...old, [key]: value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const requestBody = {
      username,
      email,
      password,
    };
    try {
      await axios.post(`${BASE_URL}/register`, requestBody);
      setErrorForm("");
      navigate("/login");
    } catch (error: any) {
      if (isAxiosError(error)) {
        setErrorForm(error?.response?.data.message ?? "Error");
      }
    }
  };

  const disabled = () => {
    return !formData.username || !formData.email || !formData.password;
  };

  return (
    <div className="auth">
      <h2>Blog App Register</h2>
      <form>
        <input
          required
          value={formData.username}
          name="username"
          placeholder="Enter username"
          type="text"
          onChange={(e) => updateDataForm(e.target.value, "username")}
        />
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
          name="register"
          onClick={onSubmit}
          disabled={disabled()}
        >
          Register
        </button>

        <span>
          Do you have an account?
          <Link to="/login" className="register-link">
            Login here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
