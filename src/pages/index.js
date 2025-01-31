import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductListing from "@/components/ProductListing";
import { products } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAvailableProucts();
  }, []);

  const getAvailableProucts = async () => {
    try {
      const response = await products();

      setAllProducts(response.items);
      localStorage.setItem("products", JSON.stringify(response.items));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-auto w-full relative py-2 ">
      <Header />
      <div className="md:pt-20 pt-4 ">
        <Hero itemNum={18} />
        <div>
          <h2 className="text-purple font-bold text-3xl">Products</h2>
          <div className=" flex flex-row gap-2 md:pb-4  mt-3">
            <select className=" rounded-md cursor-pointer text-black/60 border-2 p-3 border-gray/50 text-sm">
              <option>Sort By</option>
            </select>
            <select className=" rounded-md cursor-pointer text-black/60 border-2  p-3 border-gray/50 text-sm">
              <option>Price</option>
            </select>
            <select className=" rounded-md cursor-pointer text-black/60 border-2  p-3 border-gray/50 text-sm">
              <option>Gender</option>
            </select>
          </div>
          <ProductListing itemNum={18} allProducts={allProducts} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
