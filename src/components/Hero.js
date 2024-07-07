import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div className="  flex  flex-col w-full h-[23rem] justify-center items-center  bg-cntain  bg-[url('/hero_bg.png')]">
      <div className=" w-2/5  h-auto relative   bg-gray/[0.3] p-3 rounded-2xl ">
        <input
          type="text"
          placeholder="Sneakers"
          className="py-6  items-center text-xl  text-black/60 rounded-2xl justify-center px-10 w-[100%] h-10 outline-none "
        />
        <CiSearch className=" w-6 h-6  inset-y-6 inset-x-5  text-gray absolute" />
      </div>
    </div>
  );
}

export default Hero;
