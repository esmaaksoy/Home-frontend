import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Card from "../components/Card";

const Products = ({title}) => {

  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="p-[2rem]">
      <h1 className="text-center text-5xl">{title}</h1>
      <div className="h-1 bg-[#485865] w-[8rem] m-auto mt-2"></div>
      <div className="flex gap-7 p-[5rem] flex-wrap justify-center items-center">
        {products?.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
