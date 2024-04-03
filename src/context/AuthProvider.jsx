import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/login`, userInfo);
      toastSuccessNotify("Login successful.");
      setUser(data.user.email);
      navigate("/home");
    } catch (error) {
      toastErrorNotify("Error occurred.");
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios(`${BASE_URL}/users/logout`);
      navigate("/");
      toastSuccessNotify("Logout successful.");
      setUser(null);
    } catch (error) {
      toastErrorNotify("Error occurred.");
    }
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
