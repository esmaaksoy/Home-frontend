import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([] || {});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(`${BASE_URL}/${url}`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        search,
        setSearch,
        getData,
        data,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
