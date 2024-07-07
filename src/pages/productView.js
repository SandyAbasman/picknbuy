import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductListing from "@/components/ProductListing";
import ProductViewHero from "@/components/ProductViewHero";
import { Children } from "react";
import { CiSearch } from "react-icons/ci";

function productView() {
  return (
    <div className="w-full px-20 h-auto ">
      <Header>
        <div className="flex flex-row gap-2  justify-start p-3 items-center w-full h-auto ">
          <img className="w-[10rem] mr-60" src="./logo.png" />
          <div className=" w-[50%]  h-auto relative   p-3 rounded-2xl ">
            <input
              type="text"
              placeholder="Sneakers"
              className="  items-center text-xl font-thin border-[1px]  focus:bg-white border-gray/50 bg-gray/[0.2] text-black/60 rounded-2xl justify-center pl-10 py-6 w-[100%] h-10 outline-none "
            />
            <CiSearch className=" w-6 h-6  inset-y-6 inset-x-5  text-gray absolute" />
          </div>
        </div>
      </Header>
      <ProductViewHero />
      <ProductListing itemNum={10}>
        <div className="p-x-7">
          <h2 className="text-purple font-bold text-3xl">You May Also Like</h2>
        </div>
      </ProductListing>
      <Footer />
    </div>
  );
}

export default productView;
