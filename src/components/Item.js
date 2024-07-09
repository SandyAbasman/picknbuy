import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

function Item({ item }) {
  return (
    <a href="/productView" className=" w-36 mb-4 block   md:w-auto">
      <img
        className="mb-2  hover:opacity-50 "
        src={item.productImg}
        alt={item.productName}
      />
      <div className="md:pl-2 text-nowrap">
        <h3 className="text-sm text-text-color/60 font-bold">
          {item.productName}{" "}
          <span className="text-purple font-bold capitalize">
            ({item.gender})
          </span>
        </h3>
        <div className="flex flex-row  justify-start items-center gap-1">
          <span className=" flex flex-row">
            {[...Array(item.star)].map((x, i) => (
              <MdOutlineStar key={i} />
            ))}
            {[...Array(5 - item.star)].map((x, i) => (
              <MdOutlineStarBorder key={i} />
            ))}
          </span>
          <p>({item.rating})</p>
        </div>
        <p className="text-purple font-bold">${item.price}</p>
      </div>
    </a>
  );
}

export default Item;
