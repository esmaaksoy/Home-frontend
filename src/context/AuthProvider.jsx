import {createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const login = async (userInfo) => {

    try {
      const {data} = await axios.post(
        `${BASE_URL}/users/login`, userInfo
      );
      setUser(data.user);
      navigate("/home");
      toastSuccessNotify("Login successful.");

    } catch (error) {
      console.log(error);
    } 
  };
  // const login = (info) => {
  //   setUser(info);
  //   navigate("/products");
  // };
 
  const logout= async()=>{
    try {
      const {data} = await axios(
        `${BASE_URL}/users/logout`       
      );
      setUser(null);
      navigate("/home");
      toastSuccessNotify("Logout successful.");

    } catch (error) {
      console.log(error);
    } 


    setUser(null)
  }
  
  // useEffect(()=>{
  //   sessionStorage.setItem("user",JSON.stringify(user))
  // },[user])
  
  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
