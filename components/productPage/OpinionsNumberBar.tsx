import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  numStars: number;
  numOpinions: number;
  numTotal: number;
};

const OpinionsNumberBar = (props: Props) => {
  const widthPercentage =
    props.numTotal > 0
      ? Math.round((props.numOpinions / props.numTotal) * 100)
      : 0;
  console.log(props.numOpinions, props.numTotal, widthPercentage);
  return (
    <div className="gap-1 group cursor-pointer items-center grid grid-cols-[1rem_1rem_auto_2rem] hover:text-amber-400 transition-colors">
      <FaStar />
      {props.numStars}
      <div className="bg-gray-200 h-2 rounded-full">
        <div
          className={`bg-gray-400 rounded-full h-full group-hover:bg-amber-400 transition-colors`}
          style={{ width: `${widthPercentage}%` }}
        />
      </div>
      {props.numOpinions}
    </div>
  );
};

export default OpinionsNumberBar;
