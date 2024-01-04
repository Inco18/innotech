import Image from "next/image";
import React from "react";

type Props = {
  description: {
    icon: string;
    header: string;
    images: string[];
    content: string;
  }[];
};

const ProductDescription = ({ description }: Props) => {
  return (
    <div id="description" className="py-5 relative scroll-m-16">
      {description.map((desc) => {
        return (
          <div
            className="grid grid-cols-1 md:grid-cols-[auto_1fr] justify-items-center"
            key={desc.header}
          >
            <Image
              src={desc.icon}
              height={95}
              width={95}
              alt=""
              fetchPriority="low"
              className="md:mx-5 lg:mx-14 mb-5 md:mb-0"
            />
            <div className="flex flex-col items-center gap-5">
              <h2 className="w-full text-3xl font-medium text-center md:text-left">
                {desc.header}
              </h2>
              <p>{desc.content}</p>
              <Image
                src={desc.images[0]}
                width={900}
                height={900}
                alt=""
                className="rounded-2xl mb-10"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDescription;
