function LeftCart() {
  return (
    <div className=" md:w-[50%] w-full px-4 py-4 md:py-0  md:p-20 md:border-l  md:border-black/10">
      <div className=" flex flex-row justify-between  md:px-[1rem]  items-center  text-lg   gap-20">
        <h4>Subtotal</h4>
        <span className="font-bold"> $100</span>
      </div>
      <div className="flex flex-col  pt-4 w-full  gap-4 justify-start md:items-center ">
        <a
          href="./checkOut"
          className="bg-purple md:px-28 py-4  text-center text-nowrap hover:bg-purple/70 hover:text-white/80 cursor-pointer  mb-4  text-xs md:text-md text-white font-extralight rounded-md hover border-purple/60 border-solid border-[1px]"
        >
          Continue to checkout
        </a>
      </div>
      <p className="text-sm text-center text-black/50">
        Taxes and shipping calculated at checkout
      </p>
    </div>
  );
}

export default LeftCart;
