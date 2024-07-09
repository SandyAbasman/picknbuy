function Footer() {
  return (
    <div className="md:w-full md:flex md:flex-row justify-between items-center h-auto border-t-[0.2px] mt-20 p-4  border-gray/40 py-2 md:px-28 ">
      <div className=" md:w-2/5 w-full h-auto  flex flex-col py-8 gap-2 mt-6">
        <img className="w-1/5" src="./logo.png" />
        <p className="text-wrap text-lg text-black/50 font-thin text-left leading-7 py-2 ">
          Pick n buy is the place to get all your clothing needs. <br/>Our mission is
          to make shopping easy for everyone
        </p>
        <div className="flex w-full flex-row justify-start items-center gap-2">
          <img className="md:w-1/5" src="appple logo.png" />
          <img className="md:w-1/5" src="./google logo.png" />
        </div>
      </div>

      <div className="flex mt-6 md:mt-0 flex-row flex-wrap  gap-10   md:justify-evenly md:items-start">
        <ul>
          <li className="font-bold">Information</li>
          <li className="text-gray font-normal">Pick n Pay</li>
          <li className="text-gray font-normal"> Help Center</li>
          <li className="text-gray font-normal">For Brands</li>
        </ul>
        <ul>
          <li className="font-bold">Socials</li>
          <li className="text-gray font-normal">Twitter</li>
          <li className="text-gray font-normal">Instagram</li>
        </ul>
        <ul>
          <li className="font-bold">Legal</li>
          <li className="text-gray font-normal">Terms of Service</li>
          <li className="text-gray font-normal">Privacy policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
