import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Card from "../components/Card";
import Title from "../components/Title";

const Products = ({ title }) => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-[2rem] min-h-screen">
      <Title title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 p-4  sm:p-[5rem]  justify-center items-center">
        {products.slice(0, 3)?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
