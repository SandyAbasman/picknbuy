import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductListing from "@/components/ProductListing";

function cart() {
  return (
    <div className="md:px-20  w-screen">
      <Header />
      <Cart />
      <ProductListing itemNum={6}>
        <div className="px-20 md:px-0 ">
          <h2 className="text-purple font-bold  text-xl md:text-3xl">
            Recently Viewed
          </h2>
        </div>
      </ProductListing>
      <Footer />
    </div>
  );
}

export default cart;
