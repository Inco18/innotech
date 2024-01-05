import React from "react";
import Rating from "./Rating";
import OpinionsNumberBar from "./OpinionsNumberBar";
import AddOpinionModalButton from "./AddOpinionModalButton";
import Image from "next/image";
import { Tables } from "@/utils/supabase.types";

type Props = {
  productId: number;
  productImage: string;
  productModel: string;
  productManufacturer: string;
  rating: number;
  opinions: Tables<"opinions">[];
};

const countOpinions = (numRating: number, opinions: Tables<"opinions">[]) => {
  if (opinions.length === 0) return 0;
  return opinions.reduce((acc, cur) => {
    return acc + (cur.rating === numRating ? 1 : 0);
  }, 0);
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
                {Math.round(props.rating * 100) / 100}
                <span className="text-xl text-gray-400">/6</span>
              </p>
              <Rating rating={props.rating} starsSize="text-base md:text-xl" />
              <p className="text-sm text-gray-400">
                ({props.opinions.length} opinions)
              </p>
            </div>
            <div className="flex-1">
              <OpinionsNumberBar
                numOpinions={countOpinions(6, props.opinions)}
                numTotal={props.opinions.length}
                numStars={6}
              />
              <OpinionsNumberBar
                numOpinions={countOpinions(5, props.opinions)}
                numTotal={props.opinions.length}
                numStars={5}
              />
              <OpinionsNumberBar
                numOpinions={countOpinions(4, props.opinions)}
                numTotal={props.opinions.length}
                numStars={4}
              />
              <OpinionsNumberBar
                numOpinions={countOpinions(3, props.opinions)}
                numTotal={props.opinions.length}
                numStars={3}
              />
              <OpinionsNumberBar
                numOpinions={countOpinions(2, props.opinions)}
                numTotal={props.opinions.length}
                numStars={2}
              />
              <OpinionsNumberBar
                numOpinions={countOpinions(1, props.opinions)}
                numTotal={props.opinions.length}
                numStars={1}
              />
            </div>
          </div>
          <div className="md:border-2 flex flex-col items-center justify-center text-center rounded-lg md:p-4 md:max-w-xs lg:max-w-sm xl:max-w-lg w-full md:w-auto mx-auto md:mx-0">
            <h4 className="text-2xl font-medium hidden md:block">
              You have this product?
            </h4>
            <p
              className="text-sm text-gray-500 hidden md:block line-clamp-2"
              title={`Rate ${props.productManufacturer} ${props.productModel} and help
              others choose`}
            >
              Rate {props.productManufacturer} {props.productModel} and help
              others choose
            </p>
            <AddOpinionModalButton
              productId={props.productId}
              productImage={props.productImage}
              productModel={props.productModel}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium py-4">
            Users opinions{" "}
            <span className="text-sm text-gray-400">
              ({props.opinions.length})
            </span>
          </h3>
          <div>
            {props.opinions.map((opinion) => {
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
                      alt={opinion.username ? opinion.username : ""}
                    />
                    <p>{opinion.username}</p>
                  </div>
                  <div className="p-1 lg:ml-12">
                    <div className="flex items-center gap-2 text-sm">
                      <Rating
                        rating={opinion.rating}
                        starsSize="text-sm"
                        starsColor="text-gray-500"
                      />
                      | {new Date(opinion.created_at).toLocaleDateString()}
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
