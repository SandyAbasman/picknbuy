import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <div className="h-auto w-full relative py-2 ">
      <Header />
      <div className="md:pt-20 pt-4 ">
        <Hero itemNum={18} />
        <ProductListing itemNum={15}>
          <div>
            <h2 className="text-purple font-bold text-3xl">Products</h2>
            <div className=" flex flex-row gap-2  mt-3">
              <select className=" rounded-md cursor-pointer text-black/60 border-2 p-2 border-gray/50 text-sm">
                <option>Sort By</option>
              </select>
              <select className=" rounded-md cursor-pointer text-black/60 border-2  p-2 border-gray/50 text-sm">
                <option>Price</option>
              </select>
              <select className=" rounded-md cursor-pointer text-black/60 border-2  p-2 border-gray/50 text-sm">
                <option>Gender</option>
              </select>
            </div>
          </div>
        </ProductListing>
        <Footer />
      </div>
    </div>
  );
}
