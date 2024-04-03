import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Products from "../components/Products";
import { Helmet } from "react-helmet";

const Home = () => {
  const { search, setSearch, getData } = useContext(ProductContext);

  return (
    <>
      <Helmet>
        <title>Home | Home Page </title>
        <meta name="description" content="Your page description" />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="pt-12  flex flex-wrap gap-2 justify-center px-[1rem]">
          <input
            type="text"
            className="border border-black p-2 rounded-md w-[75%]"
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => getData(`products?search[title]=${search}`)}
            className="bg-[#F7F7F7] text-black p-2 lg:py-2 lg:px-12 rounded-md border border-black "
          >
            SEARCH{" "}
          </button>
        </div>
        <Products title={"Featured Product"} />
        <Products title={"Our Products"} />
      </div>
    </>
  );
};

export default Home;
