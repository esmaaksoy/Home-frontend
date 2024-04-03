import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import Card from "./Card";
import Title from "./Title";

const Products = ({ title }) => {
  const { data, search, getData } = useContext(ProductContext);

  useEffect(() => {
    getData(`products?search[title]=${search}`);
  }, [search]);

  return (
    <div className="p-[1rem] min-h-screen">
      <Title title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 p-4  sm:p-[5rem]  justify-center items-center">
        {data?.slice(0, 3).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
