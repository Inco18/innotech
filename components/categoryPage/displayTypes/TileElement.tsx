import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import Rating from "../../productPage/Rating";
import { formatSpecificationName } from "@/utils/formatters";
import { categoryElementMenu } from "@/constants";
import ElementMenu from "../ElementMenu";

const TileElement = ({
  id,
  name,
  price,
  rating,
  sale_price,
  images,
  specification,
}: CategoryProductProps) => {
  const specificationToShow: SpecificationItemProps = Object.entries(
    specification as SpecificationProps
  )
    .slice(0, 4)
    .sort((a, b) => (a[1].shortIndex ?? 0) - (b[1].shortIndex ?? 0))
    .map(([key, { value }]) => [key, value]);

  return (
    <div
      id={`${id}`}
      className="  rounded-md transition-shadow duration-300 group h-full hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]"
    >
      <div className={`flex flex-col justify-between relative pt-3 h-full`}>
        <div className="absolute grid grid-rows-[2.6rem,2.6rem,1fr]  top-5 bottom-5 z-[10] right-5 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <ElementMenu />
        </div>

        <div className="p-1 mx-auto">
          <div className="relative  h-[15rem]  w-[15rem]">
            <Image
              src={images[0]}
              alt="Picture of the item"
              style={{ objectFit: "contain" }}
              loading="lazy"
              fill
            />
          </div>
        </div>

        <div className="px-5">
          <p className="text-sm">{name}</p>

          <div className="flex items-center gap-2">
            <Rating rating={rating} starsSize=" text-sm" />
            <span className=" text-sm text-gray-400">(322)</span>
          </div>

          <ul className="">
            {specificationToShow.map(([key, value]) => (
              <li
                className=" text-[12px] text-gray-700 w-full truncate pt-1"
                key={key}
              >{`${formatSpecificationName(key)}: ${value}`}</li>
            ))}
          </ul>
        </div>
        <div className="py-4 px-5">
          {sale_price && (
            <div className="flex gap-2 items-center text-[13px] ">
              <span className=" p-1 bg-[#eef7ed] rounded-md text-[#007d00]">
                -{(price - sale_price).toFixed(2)} zł
              </span>
              <span className="line-through text-gray-400">
                {price.toFixed(2)} zł
              </span>
            </div>
          )}

          <p className="block text-xl font-light text-black">
            {sale_price ? sale_price.toFixed(2) : price} zł
          </p>
        </div>
      </div>
      <hr className=" w-[90%] mx-auto" />
    </div>
  );
};
export default TileElement;
