import data from "@/utils/data";
import Item from "./Item";

function ProductListing({ children, itemNum }) {
  return (
    <div className="mt-10  md:p-7">
      {children}
      <div className=" w-full h-auto flex md:p-4 p-3  justify-between items-center  flex-wrap gap-1 md:gap-8">
        {data.map((item, index) =>
          itemNum > index ? <Item item={item} key={index} /> : null
        )}
      </div>
    </div>
  );
}

export default ProductListing;
