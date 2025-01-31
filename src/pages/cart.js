import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductListing from "@/components/ProductListing";
import { CiSearch } from "react-icons/ci";
import LeftCart from "@/components/LeftCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function cart() {
  return (
    <div className="md:px-10 px-1  relative w-full ">
      <Header>
        <div className="md:flex flex-row gap-2  justify-between md:justify-start md:p-3 items-center w-full h-auto ">
          <a href="./">
            <img className="w-[10rem] mr-60 cursor-pointer" src="./logo.png " />
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
      <div className="md:px-10 w-full pt-28 md:pt-40 ">
        <div className="md:border-[0.2px] border-black/10 rounded-md  justify-between items-center md:p-16  md:flex md:flex-row ">
          <Cart>
            <div className=" w-full">
              <div className=" flex flex-row  pb-3 gap-2  items-center">
                <img src=".\Nick_logo.png" />
                <span>Nick</span>
              </div>
              <div className="flex flex-row   md:justify-start  md:gap-4 items-center  ">
                <img
                  className="w-36 pr-4 h-36"
                  src="./product_view_single_image.png"
                />
                <div className=" w-full ">
                  <div className=" flex md:flex-row  w-full justify-between md:justify-start items-center text-lg font-medium  md:gap-20">
                    <h4 className="text-nowrap">Nike sneakers</h4>
                    <span className="text-purple/90 font-bold"> $100</span>
                  </div>
                  <p className="text-black/70 font-light text-sm pt-2">
                    Randy orange / 42
                  </p>
                  <div className="bg-gray/10 flex flex-row  rounded-md px-3 w-fit  mb-2 mt-10 py-[0.3rem]">
                    <p className="flex flex-row px-2 gap-4 justify-between items-center font-medium text-lg">
                      <span className="font-thin text-black/50 cursor-pointer ">
                        <RiDeleteBin6Line />
                      </span>
                      <span>1</span>
                      <span className="cursor-pointer">
                        <IoMdAdd />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Cart>
          <LeftCart />
        </div>

        <ProductListing itemNum={5}>
          <div className="px-10 md:px-10 ">
            <h2 className="text-purple font-bold text-nowrap text-xl md:text-3xl">
              Recently Viewed
            </h2>
          </div>
        </ProductListing>
        <Footer />
      </div>
    </div>
  );
}

export default cart;
