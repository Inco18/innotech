import React from "react";
import Rating from "./Rating";
import OpinionsNumberBar from "./OpinionsNumberBar";
import AddOpinionModalButton from "./AddOpinionModalButton";
import Image from "next/image";

type Props = {
  productId: number;
  productImage: string;
  productModel: string;
  productManufacturer: string;
};

const placeholderOpinions = {
  data: [
    {
      id: 1,
      username: "John",
      description: "Very good product",
      rating: 5,
      createdAt: "2023-12-18 09:17:16.907949+00",
    },
    {
      id: 2,
      username: "Aaron",
      description: "Great product",
      rating: 6,
      createdAt: "2023-12-18 09:17:41.862263+00",
    },
    {
      id: 3,
      username: "Daniel",
      description: "The worst smartphone i've ever had",
      rating: 1,
      createdAt: "2023-12-18 09:18:23.762721+00",
    },
  ],
};

const Opinions = (props: Props) => {
  return (
    <div id="opinions" className="scroll-m-16">
      <h2 className="text-2xl font-medium pb-4 pt-2">Opinions</h2>
      <div className="2xl:px-32">
        <div className="flex justify-between gap-5 flex-col md:flex-row">
          <div className="flex flex-1">
            <div className="flex flex-col items-center p-5">
              <p className="text-4xl">
                5.5<span className="text-xl text-gray-400">/6</span>
              </p>
              <Rating
                rating={5.5}
                starsSize="text-base md:text-xl"
                isLink={false}
              />
              <p className="text-sm text-gray-400">(35 opinions)</p>
            </div>
            <div className="flex-1">
              <OpinionsNumberBar numOpinions={5} numTotal={50} numStars={6} />
              <OpinionsNumberBar numOpinions={0} numTotal={50} numStars={5} />
              <OpinionsNumberBar numOpinions={50} numTotal={50} numStars={4} />
              <OpinionsNumberBar numOpinions={25} numTotal={50} numStars={3} />
              <OpinionsNumberBar numOpinions={15} numTotal={50} numStars={2} />
              <OpinionsNumberBar numOpinions={10} numTotal={50} numStars={1} />
            </div>
          </div>
          <div className="md:border-2 flex flex-col items-center justify-center text-center rounded-lg md:p-4 md:max-w-xs lg:max-w-sm xl:max-w-none w-full md:w-auto mx-auto md:mx-0">
            <h4 className="text-2xl font-medium hidden md:block">
              You have this product?
            </h4>
            <p className="text-sm text-gray-500 hidden md:block">
              Rate {props.productManufacturer} {props.productModel} and help
              others choose
            </p>
            <AddOpinionModalButton
              productId={363}
              productImage={props.productImage}
              productModel={props.productModel}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium py-4">
            Users opinions <span className="text-sm text-gray-400">(35)</span>
          </h3>
          <div>
            {placeholderOpinions.data.map((opinion) => {
              return (
                <div
                  className="p-4 border-t-2 last:border-b-2"
                  key={opinion.id}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/defaultAvatar.svg"
                      height={36}
                      width={36}
                      alt={opinion.username}
                    />
                    <p>{opinion.username}</p>
                  </div>
                  <div className="p-1 lg:ml-12">
                    <div className="flex items-center gap-2 text-sm">
                      <Rating
                        rating={opinion.rating}
                        starsSize="text-sm"
                        starsColor="text-gray-500"
                        isLink={false}
                      />
                      | {new Date(opinion.createdAt).toLocaleDateString()}
                    </div>
                    <p className="pt-2 text-sm lg:text-base">
                      {opinion.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
