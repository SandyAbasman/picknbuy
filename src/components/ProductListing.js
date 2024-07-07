import data from "@/utils/data";
import Item from "./Item";

function ProductListing({ children }) {
  return (
    <div className="mt-10  p-7">
      {children}
      <div className=" w-full h-auto flex p-4 justify-between items-center flex-row flex-wrap gap-8">
        {data.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
