import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

// export const useProducts = () => {
//   return useContext(ProductContext);
// };

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState({});
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

  const getDetail = async (productId) => {
    setLoading(true);

    try {
      const { data } = await axios(
        `${BASE_URL}/products/${productId}`
      );
      setDetails(data.data);

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
    <ProductContext.Provider value={{ products, loading, search, setSearch, getDetail,details}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
