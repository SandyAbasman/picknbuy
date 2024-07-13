import data from "@/utils/data";
import Item from "./Item";

function ProductListing({ itemNum, allProducts }) {

  return (
    <div className=" w-full h-auto flex md:p-3 py-4 gap-6 items-center  flex-wrap  md:gap-6">
      {allProducts?.map((item, index) =>
        itemNum > index ? <Item item={item} key={item.id} /> : null
      )}
    </div>
  );
}

export default ProductListing;
