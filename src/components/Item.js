import Image from "next/image";
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const baseUrl = "https://api.timbu.cloud/images/";

function Item({ item }) {
  return (
    <Link href={`/product/${item.id}`} className=" w-36 mb-4 block   md:w-auto">
      <img
        className="mb-2  hover:opacity-50 "
        src={
          item.photos.length > 0
            ? baseUrl + item.photos[0].url
            : "https://via.placeholder.com/150"
        }
        alt={item.name}
      />

      {/* <Image
        src={
          item.photos.length > 0
            ? baseUrl + item.photos[0].url
            : "https://via.placeholder.com/150"
        }
        alt={item.name}
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
        blurDataURL="https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
        className="mb-2  hover:opacity-50"
      /> */}
      <div className="md:pl-2 text-nowrap">
        <h3 className="text-sm text-text-color/60 font-bold">
          {item.name}
          <span className="text-purple font-bold capitalize">
            ({item?.gender})
          </span>
        </h3>
        <div className="flex flex-row  justify-start items-center gap-1">
          {/* <span className=" flex flex-row">
            {[...Array(item?.star)].map((x, i) => (
              <MdOutlineStar key={i} />
            ))}
            {[...Array(5 - item?.star)].map((x, i) => (
              <MdOutlineStarBorder key={i} />
            ))}
          </span> */}
          <p>({item?.description})</p>
        </div>
        <p className="text-purple font-bold">
          ${item?.current_price[0]?.AED[0]}
        </p>
      </div>
    </Link>
  );
}

export default Item;
