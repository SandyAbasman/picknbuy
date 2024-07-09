import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Payment from "@/components/Payment";
import Header from "@/components/Header";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function checkOut() {
  return (
    <div className="md:px-20 px-4">
      <Header>
        <div className="md:flex flex-row gap-2  justify-between md:justify-start p-3 items-center w-full h-auto ">
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
      <div className="mt-28 md:px-10 md:flex md:flex-row-reverse md:justify-between border-black/20 border-t pt-10 md:items-start">
        <Cart>
          <div className=" md:ml-40 w-full p-6 md:w-[50%]  ">
            <div className=" flex flex-row   pb-3 gap-2   items-center">
              <span className="text-2xl font-medium text-nowrap">
                Order summary
              </span>
            </div>
            <div className="flex flex-row justify-start md:gap-6 gap-2 items-center  ">
              <img
                className="w-36 h-36"
                src="./product_view_single_image.png"
              />

              <div className="  ">
                <div className=" flex flex-row justify-between items-center text-xl  font-medium md:gap-20 ">
                  <p className="text-nowrap mr-3">Nike sneakers</p>
                  <span className="text-purple/90 font-bold"> $100</span>
                </div>
                <p className="text-black/70 font-light text-sm pt-2">
                  Randy orange / 42
                </p>
              </div>
            </div>
            <div className=" flex flex-col md:p-3 gap-3 pt-2">
              <div className=" flex flex-row justify-between items-center md:gap-[20.5rem]  text-xs ">
                <h4 className="">Subtotal</h4>
                <span> $100</span>
              </div>
              <div className=" flex flex-row justify-between items-center md:gap-[20.9rem]  text-lg   ">
                <h4>Total</h4>
                <span> $100</span>
              </div>
            </div>
          </div>
        </Cart>
        <Payment />
      </div>
      <Footer />
    </div>
  );
}

export default checkOut;
