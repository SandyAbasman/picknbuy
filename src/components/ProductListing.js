import data from "@/utils/data";
import Item from "./Item";

function ProductListing({ children, itemNum }) {
  return (
    <div className="mt-10 md:px-20 px-2 md:p-7">
      {children}
      <div className=" w-full h-auto flex md:p-4 py-4 gap-6  items-center  flex-wrap  md:gap-8">
        {data.map((item, index) =>
          itemNum > index ? <Item item={item} key={index} /> : null
        )}
      </div>
    </div>
  );
}

export default ProductListing;
