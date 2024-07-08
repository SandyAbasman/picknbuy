import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

function Cart() {
  return (
    <div className="border-[0.2px] border-black/10 rounded-md justify-between items-center px-8  md:flex md:flex-row ">
      <div className=" md:border-r  md:border-black/10 md:w-[65%] p-8 w-full ">
        <div className="p-6">
          <div className=" flex flex-row  pb-3 gap-2  items-center">
            <img src=".\Nick_logo.png" />
            <span>Nick</span>
          </div>
          <div className="flex flex-row  justify-start gap-7 items-center  ">
            <img className="w-36 h-36" src="./product_view_single_image.png" />
            <div className="  ">
              <div className=" flex flex-row justify-between items-center text-lg font-medium  gap-20">
                <h4>Nike sneakers</h4>
                <span className="text-purple/90 font-bold"> $100</span>
              </div>
              <p className="text-black/70 font-light text-sm pt-2">
                Randy orange / 42
              </p>
              <div className="bg-gray/10 flex flex-row  rounded-md px-3 w-1/2  mb-2 mt-10 py-[0.3rem]">
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
      </div>
      <div className=" md:w-[40%] w-full  p-10">
        <div className=" flex flex-row justify-between items-center  text-lg   gap-20">
          <h4>Subtotal</h4>
          <span className="font-bold"> $100</span>
        </div>
        <div className="flex flex-col pt-8  gap-4 justify-start items-center ">
          <button className="bg-purple w-full md:px-28 py-4  hover:bg-purple/70 hover:text-white/80  mb-4  text-xs md:text-md text-white font-extralight rounded-md hover border-purple/60 border-solid border-[1px]">
            Continue to checkout
          </button>
        </div>
        <p className="text-sm text-center text-black/50">
          Taxes and shipping calculated at checkout
        </p>
      </div>
    </div>
  );
}

export default Cart;
