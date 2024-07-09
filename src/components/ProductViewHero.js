import data from "@/utils/data";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";

function ProductViewHero() {
  return (
    <div className="  h-auto flex md:flex-row flex-col justify-between mt-6 items-start ">
      <div className=" md:w-[60%] w-full h-auto flex flex-col justify-start pb-5 md:pb-0 items-center  gap-6">
        <div>
          <img className="w-80 h-80 " src="./product_view_single_image.png" />
        </div>
        <div className="flex flex-row gap-2">
          <img src="./productViewphoto1.png" />
          <img src="./productViewphoto2.png" />
          <img src="./productViewphoto3.png" />
          <img src="./productViewphoto4.png" />
        </div>
        <div className=" hidden   md:flex flex-row justify-between gap-20 items-end md:p-4">
          <div>
            <div className="mt-6">
              <p className="flex flex-row gap-3 font-bold">
                Review
                <span className=" flex flex-row text-xl">
                  {[...Array(3)].map((x, i) => (
                    <MdOutlineStar key={i} />
                  ))}
                  {[...Array(2)].map((x, i) => (
                    <MdOutlineStarBorder key={i} />
                  ))}
                </span>
                <span className="text-black/60">(4.8)</span>
              </p>
            </div>
            <div className="mt-6 gap-4">
              <span className=" flex flex-row text-xl">
                {[...Array(5)].map((x, i) => (
                  <MdOutlineStar key={i} />
                ))}
              </span>
              <p className="mt-3 text-black/50">
                Oluwakemi <span>.June 16</span>
              </p>
              <p className="text-wrap w-80 h-auto mt-4  text-black/80">
                Extremely comfortable and durable. After four years of spring to
                fall wear with my first pair I had to replace due to tread
                wearing. 
              </p>
            </div>
          </div>
          <div>
            <span className=" flex flex-row text-xl">
              {[...Array(5)].map((x, i) => (
                <MdOutlineStar key={i} />
              ))}
            </span>
            <p className="mt-3  text-black/50">
              David <span>.. June 16</span>
            </p>
            <p className="text-wrap w-80 h-auto mt-4 text-black/80">
              As most of the Nike’s reviews say, these shoes were crazy comfy
              from the first moment I put them on.
            </p>
          </div>
        </div>
      </div>

      <div className=" md:w-[30%] md:p-4  w-full flex flex-col justify-start items-start  ">
        <div className="flex flex-col  md:pr-6 ">
          <div className=" flex flex-col gap-5">
            <div className="flex flex-row justify-start items-center gap-6">
              <img src=".\Nick_logo.png" /> <span>Nick</span>
            </div>
            <div className="flex flex-row justify-between items-center gap-36 ">
              <p className="text-nowrap"> Nike sneakers-Anorak </p>
              <img src=".\love icon.png" />
            </div>
            <div>
              <span>$100.00</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Color</p>
              <p className="flex flex-row  justify-start items-center gap-1 text-black/80">
                Randy orange
                <span className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </span>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center  text-black/80">
              <p>Size</p>
              <p className="flex flex-row  justify-start items-center gap-2">
                42
                <span className="flex flex-col">
                  <MdKeyboardArrowUp />
                  <MdKeyboardArrowDown />
                </span>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Quantity</p>
              <div className="bg-gray/10 flex flex-row  rounded-md md:px-3 py-[0.3rem]">
                <p className="flex flex-row px-2 gap-4 justify-between items-center font-medium text-lg">
                  <span className="font-thin text-black/30 cursor-pointer ">
                    <GrSubtract />
                  </span>
                  <span>1</span>
                  <span className="cursor-pointer">
                    <IoMdAdd />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-8  gap-4 justify-start items-center ">
            <a
              href="./cart"
              className="bg-white w-full md:px-32 py-3 text-purple text-center hover:bg-purple/70 hover:text-white md:text-md  font-medium rounded-md border-purple/30 border-solid border-[0.4px]"
            >
              Add to cart
            </a>
            <a
              href="./checkOut"
              className="bg-purple w-full md:px-32 py-3 text-center  hover:bg-purple/70 hover:text-white  md:text-md text-white font-medium rounded-md hover border-purple/60 border-solid border-[1px]"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div>
          <div className=" flex flex-row justify-between gap-10 items-end ">
            <div className=" ">
              <div className="mt-6">
                <p className="flex flex-col gap-2 text-black/90 text-2xl">
                  Description
                  <span className=" text-sm font-bold">
                    **Anoraks are made to order.Please allow 3-5 days <br />
                    for your order to ship. No returns.**
                  </span>
                </p>
              </div>
              <div className=" gap-4">
                <p className="mt-3 text-black/90">
                  Welcome Washington Area Bicyclist Association supporters! 15%
                  of sales go to WABA, supporting their mission. Empowering
                  people to ride bikes, build con...
                  <a className="underline text-black/60 p-1 cursor-pointer">
                    View More
                  </a>
                </p>
                <div className="flex w-full flex-col justify-start item-center mt-4">
                  <div className="bg-gray/10 hover:bg-gray/15  text w-full px-38 flex flex-row justify-center cursor-pointer items-center text-center py-2 text-black/80 font-medium text-sm rounded-md">
                    <span className="mr-5">
                      <AiOutlineLink />
                    </span>
                    <span>More details at Nike</span>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-5 pt-3">
                    <div className=" cursor-pointer  hover:bg-gray/15 bg-gray/10 text w-full px-38 text-center py-2 text-black/80 font-medium text-sm rounded-md">
                      Shipping Policy
                    </div>
                    <div className="bg-gray/10 cursor-pointer text w-full px-38 text-center py-2 text-black/80 text-sm rounded-md">
                      Refund Policy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewHero;
