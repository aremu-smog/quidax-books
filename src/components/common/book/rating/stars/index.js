import React from "react";
import StarIcon from "./icon";

const Stars = ({ no }) => {
  const no_of_stars = parseInt(no);
  const stars = [];
  // const remainder = no - parseInt(no_of_stars);
  // const upper_limit = Math.ceil(no);

  for (let i = 1; i <= 5; i++) {
    let fill_ratio = 0;
    if (i <= no_of_stars) {
      fill_ratio = 1;

      // if (i === upper_limit && remainder !== 0) {
      //   fill_ratio = remainder;
      // }
    }

    const star_icon = <StarIcon fill_ratio={fill_ratio} key={i} />;
    stars.push(star_icon);
  }

  return <>{stars}</>;
};

export default Stars;
