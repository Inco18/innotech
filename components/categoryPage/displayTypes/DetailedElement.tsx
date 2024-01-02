import Image from "next/image";

import Rating from "../../productPage/Rating";
import { formatSpecificationName } from "@/utils/formatters";
import { categoryElementMenu } from "@/constants";
import ElementMenu from "../ElementMenu";

const DetailedElement = ({
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
      className="  rounded-md transition-shadow duration-300 group hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]"
    >
      <div
        className={`flex relative py-5 h-full items-start  overflow-hidden lg:px-5`}
      >
        <div className="absolute grid grid-cols-[2.6rem,2.6rem,2.6rem] gap-2   bottom-5 z-[10] right-5  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <ElementMenu />
        </div>

        <div className=" overflow-hidden my-auto">
          <div className="relative  h-[5rem]  w-[5rem] sm:w-[10rem]  sm:h-[10rem]">
            <Image
              src={images[0]}
              alt="Picture of the item"
              style={{ objectFit: "contain" }}
              loading="lazy"
              sizes="100%"
              fill={true}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full  justify-between">
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
          <div className="px-5 md:px-0">
            {sale_price && (
              <div className="flex gap-2 items-center text-[13px]">
                <span className=" p-1 bg-[#eef7ed] rounded-md text-[#007d00]">
                  -{(price - sale_price).toFixed(2)} zł
                </span>
                <span className="line-through text-gray-400">
                  {price.toFixed(2)} zł
                </span>
              </div>
            )}

            <p className="block text-xl font-light text-black text-left  md:text-right">
              {sale_price ? sale_price.toFixed(2) : price} zł
            </p>
          </div>
        </div>
      </div>
      <hr className=" w-[99%] mx-auto" />
    </div>
  );
};
export default DetailedElement;
