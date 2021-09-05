import React from "react";
import StarIcon from "./icon";

const Stars = ({ no }) => {
  const no_of_stars = no;
  const stars = [];

  const remainder = no_of_stars - parseInt(Math.floor(no_of_stars));

  for (let i = 1; i <= 5; i++) {
    let fill_ratio = 0;
    if (i < no_of_stars) {
      fill_ratio = 1;
    } else if (i === parseInt(Math.ceil(no_of_stars))) {
      fill_ratio = remainder;
    } else {
      fill_ratio = 0;
    }

    const star_icon = <StarIcon fill_ratio={fill_ratio} key={i} />;
    stars.push(star_icon);
  }

  return <>{stars}</>;
};

export default Stars;
