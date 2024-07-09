import { CiSearch } from "react-icons/ci";
import data from "@/utils/data";
import Item from "./Item";
import Marquee from "react-fast-marquee";

function Hero({ itemNum }) {
  return (
    <div className=" mt-[6rem] md:mt-0  w-full  md:justify-center flex flex-col  relative md:items-center   ">
      <div className=" flex flex-col justify-center mb-2 items-center">
        <img src=".\logo.png" />

        <div className="  mx-1 relative md:hidden  w-full  mt-4 bg-gray/[0.3] p-3 rounded-2xl ">
          <input
            type="text"
            placeholder="Sneakers"
            className="py-6  items-center text-xl   text-black/60 rounded-2xl justify-center px-10 w-full h-10 outline-none "
          />
          <CiSearch className=" w-6 h-6  inset-y-6 inset-x-5  text-gray absolute" />
        </div>
      </div>

      <div className="absolute left-1/2 top-24  md:block hidden -translate-x-1/2 -translate-y-1/2 ">
        <img src="./blur+logo.png" />
        <div className=" w-[40rem] mx-1 relative   mt-4 bg-gray/[0.3] p-3 rounded-2xl ">
          <input
            type="text"
            placeholder="Sneakers"
            className="py-6  items-center text-xl   text-black/60 rounded-2xl justify-center px-10 w-full h-10 outline-none "
          />
          <CiSearch className=" w-6 h-6  inset-y-6 inset-x-5  text-gray absolute" />
        </div>
      </div>
      <div className="-z-10">
        <Marquee speed={17}>
          <div className="md:flex flex-row  hidden  gap-4 ">
            {data.toReversed().map((item, index) => (
              <img
                className="mb-2 p-2 w-40 h-40 hover:opacity-50 "
                src={item.productImg}
                alt={item.productName}
              />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" speed={20}>
          <div className="md:flex flex-row  flex  gap-4 ">
            {data.map((item, index) => (
              <img
                className="mb-2 p-2 w-40 h-40 hover:opacity-50 "
                src={item.productImg}
                alt={item.productName}
              />
            ))}
          </div>
        </Marquee>
        <Marquee speed={15}>
          <div className="md:flex flex-row  flex  gap-4 ">
            {data.map((item, index) =>
              12 > index ? (
                <img
                  className="mb-2 p-2 w-40 h-40 hover:opacity-50 "
                  src={item.productImg}
                  alt={item.productName}
                />
              ) : null
            )}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
