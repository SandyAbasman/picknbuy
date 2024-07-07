function Footer() {
  return (
    <div className="w-full flex flex-row justify-between items-center h-auto border-t-[0.2px] mt-20  border-gray/40 py-2 px-6 ">
      <div className="w-2/5 h-auto  flex flex-col gap-2 mt-6">
        <img className="w-2/5" src="./logo.png" />
        <p className="text-wrap text-xl text-black/50 font-thin leading-7 py-3 ">
          Qui consequat cillum exercitation aliqua sit veniam labore deserunt
          esse culpa ea. Exercitation officia qui nostrud proident cillum
          adipisicing.
        </p>
        <div className="flex flex-row justify-start items-center gap-3">
          <img className="w-2/5" src="appple logo.png" />
          <img className="w-2/5" src="./google logo.png" />
        </div>
      </div>

      <div className="flex flex-row gap-10  justify-evenly items-start">
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
