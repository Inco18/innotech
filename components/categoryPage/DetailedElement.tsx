import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import Rating from "../productPage/Rating";
import { formatSpecificationName } from "@/utils/formatters";

const DetailedElement = ({
  id,
  name,
  price,
  rating,
  sale_price,
  images,
  specification,
}: CategoryProductProps) => {
  const specificationToShow = Object.entries(specification).slice(0, 4);

  return (
    <div
      id={`${id}`}
      className="  rounded-md transition-shadow duration-300 group hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]"
    >
      <div className={`flex   relative pt-3 h-full items-start`}>
        <div className="absolute grid grid-cols-[2.6rem,2.6rem,2.6rem] gap-2   bottom-5 z-[10] right-5  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <button className=" rounded-lg h-[2.6rem] w-[2.6rem]  bg-white text-gray-500  text-xl flex justify-center items-center hover:bg-gray-100">
            <IoIosHeartEmpty />
          </button>
          <button className="rounded-lg h-[2.6rem] w-[2.6rem] bg-white text-gray-500 text-xl flex justify-center items-center hover:bg-gray-100">
            <FaScaleUnbalanced />
          </button>
          <button className="border rounded-lg  h-[2.6rem] w-[2.6rem] border-green-600 text-green-600 text-xl flex justify-center items-center hover:bg-green-600 hover:text-white transition-colors duration-300">
            <BsCartPlus />
          </button>
        </div>

        <div className=" overflow-hidden my-auto">
          <div className="relative  h-[5rem]  w-[5rem] sm:w-[10rem]  sm:h-[10rem]">
            <Image
              src={images[0]}
              alt="Picture of the item"
              style={{ objectFit: "contain" }}
              loading="lazy"
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
          <div className="px-5 md:px-0 ">
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
      <hr className=" w-[90%] mx-auto" />
    </div>
  );
};
export default DetailedElement;
