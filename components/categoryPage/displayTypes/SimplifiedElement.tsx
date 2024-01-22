import Image from "next/image";
import Rating from "../../productPage/Rating";
import DropdownMenu from "../smallScreen/DropdownMenu";
import { simplifiedElementDropdownMenu } from "@/constants";
import ElementMenu from "../ElementMenu";

const SimplifiedElement = ({
  id,
  name,
  price,
  rating,
  sale_price,
  images,
  specification,
  num_opinions,
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
      className="  rounded-md transition-shadow duration-300 group hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] "
    >
      <div
        className={`py-2 px-1 relative h-full flex flex-col  sm:grid sm:grid-cols-[min-content,minmax(10rem,1fr),10rem,7rem] sm:items-center gap-2 sm:gap-0`}
      >
        <div className=" absolute sm:hidden top-4 right-4 z-[13]">
          <DropdownMenu
            options={simplifiedElementDropdownMenu}
            product={{
              id,
              name,
              price,
              salePrice: sale_price || undefined,
              quantity: 1,
              imageUrl: images[0],
            }}
          />
        </div>

        <div className=" overflow-hidden my-auto">
          <div className="relative mx-auto   sm:h-[4rem]  sm:w-[4rem] w-[10rem]  h-[10rem]">
            <Image
              src={images[0]}
              alt="Picture of the item"
              style={{ objectFit: "contain" }}
              sizes="100%"
              loading="lazy"
              fill={true}
            />
          </div>
        </div>

        <div className="px-5 relative">
          <p className="text-sm sm:truncate">{name}</p>

          <p className="truncate hidden sm:block">
            {specificationToShow.map(([key, value], index) => (
              <span
                className=" text-[12px] text-gray-700 w-full truncate pt-1"
                key={key}
              >{`${value} ${
                index !== specificationToShow.length - 1 ? "|" : ""
              } `}</span>
            ))}
          </p>

          <div className="hidden absolute sm:grid grid-cols-[2.6rem,2.6rem,2.6rem] gap-2 bg-white top-[50%] translate-y-[-50%] z-[10] right-5  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            <ElementMenu
              product={{
                id,
                name,
                price,
                salePrice: sale_price || undefined,
                quantity: 1,
                imageUrl: images[0],
              }}
            />
          </div>
        </div>
        <div className=" items-center gap-2 flex pl-5 sm:pl-0">
          <Rating rating={rating} starsSize=" text-[12px]" />
          <span className=" text-sm text-gray-400">({num_opinions})</span>
        </div>
        <div className="pl-5 sm:pl-0 sm:pr-5">
          {sale_price && (
            <div className="flex gap-2 items-center text-[11px] justify-start sm:justify-end">
              <span className="line-through text-gray-400">
                {price.toFixed(2)} zł
              </span>
            </div>
          )}

          <span className="block  font-light text-black text-[15px] text-left sm:text-right">
            {sale_price ? sale_price.toFixed(2) : price} zł
          </span>
        </div>
      </div>
      <hr className=" hidden sm:block w-[99%] mx-auto " />
    </div>
  );
};
export default SimplifiedElement;
