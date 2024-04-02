import { useContext } from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Footer from "../components/Footer";


const PrivateRouter = () => {
  
  const { user } = useContext(AuthContext);
  
  return user ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/home" />
  );
};

export default PrivateRouter;
