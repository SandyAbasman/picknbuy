import data from "@/utils/data";
import Item from "./Item";

function ProductListing({ children, itemNum }) {
  return (
    <div className="mt-10 md:px-28 md:p-7">
      {children}
      <div className=" w-full h-auto flex md:p-4 p-3 gap-1 px-1  justify-between items-center  flex-wrap  md:gap-8">
        {data.map((item, index) =>
          itemNum > index ? <Item item={item} key={index} /> : null
        )}
      </div>
    </div>
  );
}

export default ProductListing;
