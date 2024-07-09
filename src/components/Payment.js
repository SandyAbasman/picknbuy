import { AiOutlineCreditCard } from "react-icons/ai";

function Payment() {
  return (
    <div className=" md:w-[50%]  border-r-[0.1px] mb-20  border-black/20  ">
      <div className=" w-fit p-8">
        <div className=" flex-col flex gap-3  ">
          <h3 className="font-medium text-black/70  text-2xl">Payment details</h3>
          <div className="flex flex-row gap-3 pt-4 ">
            <span className="pr-2 font-medium text-sm text-black/60">
              Credit card/Debit card
            </span>
            <img src="./logos_mastercard.png" />
            <img src="./verve.png" />
          </div>

          <div className="md:flex md:flex-col gap-3   ">
            <div className="md:flex md:flex-row gap-6 ">
              <div className="flex flex-col">
                <label>First name</label>
                <input
                  className="border-[0.1px] p-2  text-black/80 border-black/20 rounded-md"
                  type="text"
                  placeholder="e.g John"
                />
              </div>
              <div className="flex flex-col">
                <label>Last name</label>
                <input
                  className="border-[0.1px] p-2  text-black/80   border-black/20 rounded-md"
                  type="text"
                  placeholder="e.g Doe"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Delivery address</label>
              <input
                className="border-[0.1px] p-2  text-black/80 border-black/20 rounded-md"
                type="text"
                placeholder="e.g James oni road, GRA"
              />
            </div>
            <div className="md:flex md:flex-row gap-4 justify-between ">
              <div className="flex flex-col md:w-2/3 ">
                <label>Country</label>
                <select className=" border-[0.1px] p-2   border-black/20 rounded-md">
                  <option className=" text-black/50">Nigeria</option>
                  <option>Ghana</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="flex flex-col md:w-2/3">
                <label>State</label>
                <select className="border-[0.1px] p-2   text-black/80 border-black/20 rounded-md">
                  <option className=" text-black/50">Select</option>
                  <option>Uyo</option>
                  <option>Lagos</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="flex flex-col ">
              <label className="pb-2">Card details</label>
              <input
                className=" border-[0.1px] p-2   text-black/80 border-black/20 rounded-md"
                type="text"
                placeholder="e.g Card number "
              />
            </div>
            <div className="md:flex md:flex-row justify-between ">
              <div className="flex flex-col md:w-2/3">
                <input
                  className=" border-[0.1px] p-2   text-black/80 border-black/20 rounded-md"
                  type="text"
                  placeholder="Expiry date"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className=" border-[0.1px] p-2   text-black/80 border-black/20 rounded-md "
                  type="text"
                  placeholder="CVV code"
                />
              </div>
            </div>
            <div className="flex flex-col   ">
              <input
                className=" border-[0.1px] p-2  text-black/80 border-black/20 rounded-md"
                type="text"
                placeholder="Card pin"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col pt-8  gap-4 justify-start items-center ">
            <p className="text-sm text-center text-black/50">
              By clicking pay, you agree to Pick n buy{" "}
              <a className="text-purple">Terms of Use</a> and{" "}
              <a className="text-purple">Privacy </a>
              Policy
            </p>
            <button className="bg-purple w-full md:px-28 py-4 flex justify-center items-center gap-3  hover:bg-purple/70 hover:text-white/80  mb-4  text-xl md:text-md text-white font-extralight rounded-md hover border-purple/60 border-solid border-[1px]">
              <span className="text-2xl">
                <AiOutlineCreditCard />
              </span>
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
