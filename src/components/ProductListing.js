import data from "@/utils/data";
import Item from "./Item";

function ProductListing({ children, itemNum }) {
  return (
    <div className="mt-10 md:px-20 md:py-4 px-4 md:p-7">
      {children}
      <div className=" w-full h-auto flex md:p-3 py-4 gap-6 justify-between   items-center  flex-wrap  md:gap-6">
        {data.map((item, index) =>
          itemNum > index ? <Item item={item} key={index} /> : null
        )}
      </div>
    </div>
  );
}

export default ProductListing;
