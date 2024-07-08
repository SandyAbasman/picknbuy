function Footer() {
  return (
    <div className="md:w-full md:flex md:flex-row justify-between items-center h-auto border-t-[0.2px] mt-20  border-gray/40 py-2 px-6 ">
      <div className=" md:w-2/5 w-full h-auto  flex flex-col gap-2 mt-6">
        <img className="w-2/5" src="./logo.png" />
        <p className="text-wrap text-xl text-black/50 font-thin leading-7 py-3 ">
          Qui consequat cillum exercitation aliqua sit veniam labore deserunt
          esse culpa ea. Exercitation officia qui nostrud proident cillum
          adipisicing.
        </p>
        <div className="flex w-full flex-row justify-start items-center gap-2">
          <img className="md:w-2/5" src="appple logo.png" />
          <img className="md:w-2/5" src="./google logo.png" />
        </div>
      </div>

      <div className="flex sm:mt-10 flex-row flex-wrap  gap-10   md:justify-evenly md:items-start">
        <ul>
          <li className="font-bold">Information</li>
          <li className="text-gray font-normal">Shop Pay</li>
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
