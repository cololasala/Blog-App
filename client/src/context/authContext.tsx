import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface IAuthContext {
  currentUser: any;
  login: (bodyRequest: any) => void;
  logout: () => void;
}
export const AuthContext = createContext<IAuthContext>({
  currentUser: null,
  login: () => {},
  logout: () => {},
});

const BASE_URL = "/api/auth";
export const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<string | null>(
    JSON.parse(localStorage.getItem("user")!) || null,
  );

  const login = async (body: any) => {
    const response = await axios.post(`${BASE_URL}/login`, body);
    setCurrentUser(response.data);
  };

  const logout = async () => {
    await axios.post(`${BASE_URL}/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
