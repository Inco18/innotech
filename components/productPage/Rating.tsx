import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type Props = {
  rating: number;
};

const Rating = (props: Props) => {
  let stars: React.JSX.Element[] = [];
  for (let index = 1; index <= props.rating; index++) {
    stars.push(<FaStar />);
  }

  for (let index = props.rating; index < 6; index++) {
    if (index === props.rating && props.rating % 1 >= 0.5)
      stars.push(<FaStarHalfAlt />);
    else stars.push(<FaRegStar />);
  }

  return (
    <Link
      href={"#opinions"}
      className="flex items-center justify-center gap-1 text-xs py-2 w-fit text-amber-400"
      title={props.rating.toString()}
    >
      {stars}
      <p className="text-gray-600 font-semibold">(222 opinions)</p>
    </Link>
  );
};

export default Rating;
