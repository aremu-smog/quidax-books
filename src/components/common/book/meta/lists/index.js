import React from "react";

const MetaList = ({ items, isFeatured }) => {
  let names;
  if (isFeatured) {
    names = items.filter((_, index) => index < 2).map((item) => item.name);
  } else {
    names = items.map((item) => item.name);
  }

  return <>{names.join(", ")}</>;
};

export default MetaList;
