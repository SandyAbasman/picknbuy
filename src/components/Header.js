import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Header({ children }) {
  return (
    <div className="flex fixed top-0 left-0 right-0 flex-row justify-end items-center md:px-28 bg-white/80 z-30 w-full h-auto">
      {children}
      <div className=" w-1/5  flex flex-row  p-6 justify-end items-center gap-3">
        <span className="text-3xl hidden cursor-pointer hover:opacity-10">
          <CiHeart />
        </span>
        <a
          href="./cart"
          className="text-3xl font-thin mr-4 text-black/70 hover:opacity-10 cursor-pointer"
        >
          <HiOutlineShoppingCart />
        </a>
        <div className="rounded-full py-1 font-light px-3 text-xl text-center hover:opacity-10 cursor-pointer text-white bg-purple ">
          D
        </div>
      </div>
    </div>
  );
}

export default Header;
