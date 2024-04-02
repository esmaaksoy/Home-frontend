import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

// export const useProducts = () => {
//   return useContext(ProductContext);
// };

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getData = async () => {
    setLoading(true);

    try {
      const { data } = await axios(
        `${BASE_URL}/products`
      );
      setProducts(data.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, search, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
