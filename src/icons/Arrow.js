import React from "react";

const ArrowIcon = ({ width = "24", color = "black" }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13.2819V11.5338H7.37343L12.6712 6.23606L11.4351 5L4.90132 11.5338L4 12.4078L4.90132 13.2819L11.4351 19.8157L12.6712 18.5796L7.37343 13.2819H20Z"
        fill={color}
      />
    </svg>
  );
};

ArrowIcon.propTypes = {};

export default ArrowIcon;
