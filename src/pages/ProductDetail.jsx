import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import Title from "../components/Title";
import { CiStar } from "react-icons/ci";

const ProductDetail = () => {
  const { productId } = useParams();

  const { getDetail, details } = useContext(ProductContext);

  useEffect(() => {
    getDetail(productId);
  }, [productId]);

  const {
    thumbnail,
    title,
    description,
    category,
    price,
    images,
    rating,
    brand,
    stock,
  } = details;

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen  flex items-center p-12">
        <div className="flex backdrop-blur-sm bg-[#F7F7F7] sm:w-[80%] m-auto">
          <div className="w-[50%]">
            <img src={thumbnail} alt="image" />
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
          <div className="w-[50%] px-5">
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
            <div className="mt-5 flex justify-center gap-8">
              <h1 className="text-2xl">{category?.name} </h1>
              <p className="text-2xl font-bold"> | </p>
              <h1 className="text-2xl">{brand} </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
