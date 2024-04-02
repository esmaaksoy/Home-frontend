import { useContext } from "react";
import { ProductContext, useProducts } from "../context/ProductProvider";
import Products from "./Products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  // const { products} = useProducts();
  // console.log(products)
  return (
    <div className="min-h-screen">
      <Products title={"Featured Product"}/>
      <Products title={"Our Products"}/>
    </div>
  );
};

export default Home;
