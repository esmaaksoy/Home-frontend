import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Card from "../components/Card";
import Title from "../components/Title";

const Products = ({ title }) => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-[2rem] min-h-screen">
      <Title title={title} />
      <div className="flex gap-7 p-[5rem] flex-wrap justify-center items-center">
        {products?.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
