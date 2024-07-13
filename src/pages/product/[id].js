import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductListing from "@/components/ProductListing";
import ProductViewHero from "@/components/ProductViewHero";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";
import { productItem } from "@/utils/api";

function ProductView() {
  const router =  useRouter();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    router.query.id !== undefined ? getAvailableProduct() : "";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const getAvailableProduct = async () => {
    try {
      const response = await productItem(router.query.id);
      setProduct(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full md:px-20   h-auto relative ">
      <Header>
        <div className="md:flex flex-row gap-2  justify-between md:justify-start p-3 items-center w-full h-auto ">
          <a href="./">
            <img
              className="w-[10rem] mr-60 cursor-pointer"
              src="./logo.png "
              alt="logo"
            />
          </a>
          <div className=" w-[50%]  h-auto relative hidden  lg:block p-3 rounded-2xl ">
            <input
              type="text"
              placeholder="Sneakers"
              className="  items-center  text-sm font-thin border-[1px]  focus:bg-white border-gray/50 bg-gray/[0.2] text-black/60 rounded-2xl justify-center pl-10 py-4 w-[100%] h-10 outline-none "
            />
            <CiSearch className=" w-6 h-6  inset-y-5 inset-x-5  text-gray absolute" />
          </div>
        </div>
      </Header>
      <div className="pt-4  ">
        <ProductViewHero product={product} />
        <ProductListing itemNum={10}>
          <div className=" md:px-0  ">
            <h2 className="text-purple font-bold  text-xl md:text-3xl">
              You May Also Like
            </h2>
          </div>
        </ProductListing>
        <Footer />
      </div>
    </div>
  );
}

export default productView;
