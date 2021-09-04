import React from "react";

const HeartIcon = ({ width = "24", color = "black" }) => {
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
        d="M12.3639 19L18.4542 13.2819C19.2727 12.4841 19.7333 11.3961 19.7333 10.2608C19.7333 9.12548 19.2727 8.03745 18.4542 7.23969C16.7692 5.60758 14.0778 5.58411 12.3639 7.1866C10.647 5.58714 7.95552 5.61546 6.27355 7.25068C5.45657 8.0499 4.99792 9.13876 5.00001 10.2741C5.0021 11.4094 5.46477 12.4966 6.28468 13.2929L12.3639 19ZM7.31798 8.28518C7.92863 7.68507 8.77925 7.38605 9.63677 7.47005C10.4943 7.55405 11.2688 8.01226 11.748 8.71912L12.3639 9.6346L12.9798 8.71912C13.0884 8.56256 13.2127 8.41718 13.3508 8.28518C14.4778 7.19368 16.2828 7.19368 17.4098 8.28518C17.9448 8.80594 18.2468 9.51599 18.2489 10.2576C18.251 10.9992 17.9529 11.7109 17.4209 12.2346L12.3639 16.9786L7.31798 12.2401C6.78278 11.7176 6.48162 11.0056 6.48162 10.2626C6.48162 9.51968 6.78278 8.80762 7.31798 8.28518Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;