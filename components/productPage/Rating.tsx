import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type Props = {
  rating: number;
  starsSize: string;
  starsColor?: string;
};

const Rating = (props: Props) => {
  let stars: React.JSX.Element[] = [];
  for (let index = 1; index <= props.rating; index++) {
    stars.push(<FaStar key={`star-${index}`} />);
  }

  for (let index = props.rating; index < 6; index++) {
    if (index === props.rating && props.rating % 1 >= 0.5)
      stars.push(<FaStarHalfAlt key={`star-half-${index}`} />);
    else stars.push(<FaRegStar key={`star-empty-${index}`} />);
  }

  return (
    <div
      className={`flex items-center justify-center gap-1 ${
        props.starsSize
      } py-2 w-fit ${props.starsColor ? props.starsColor : "text-amber-400"}`}
      title={props.rating.toString()}
    >
      {stars}
    </div>
  );
};

export default Rating;
