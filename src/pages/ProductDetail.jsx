import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import Title from "../components/Title";
import { CiStar } from "react-icons/ci";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const { productId } = useParams();
  const { getData, data } = useContext(ProductContext);

  useEffect(() => {
    getData(`products/${productId}`);
  }, [productId, data]);

  const {
    thumbnail,
    title,
    description,
    category,
    price,
    images,
    rating,
    brand,
  } = data;

  return (
    <>
      <Helmet>
        <title>Product | Home Page </title>
        <meta name="description" content="Your page description" />
      </Helmet>
      <div className="min-h-screen flex  items-center p-5 sm:p-12">
        <div className="flex flex-col lg:flex-row backdrop-blur-sm bg-[#F7F7F7] sm:w-[80%] m-auto">
          <div className="lg:w-[50%]">
            <img src={thumbnail} alt="image" className="w-full" />
            <div className="flex gap-2 py-2">
              {images?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="image"
                  className="h-[20vh] w-full"
                />
              ))}
            </div>
          </div>
          <div className="lg:w-[50%] px-5 mt-12 sm:mt-0">
            <Title title={title} />
            <div className="flex justify-end p-5">
              {Array.from({ length: rating }, (_, index) => index + 1).map(
                (_, index) => (
                  <CiStar key={index} className="text-black" />
                )
              )}
            </div>
            <p>{description}</p>
            <div className="flex justify-between mt-5">
              <h1 className="text-2xl">$ {price}</h1>
              <button className="bg-[#D5D5D5] rounded-xl px-8">Buy Now</button>
            </div>
            <div className="mt-5 flex justify-center gap-8 p-4">
              <h1 className="text-lg sm:text-2xl">{category?.name} </h1>
              <p className="text-lg  font-bold"> | </p>
              <h1 className="text-lg sm:text-2xl">{brand} </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
