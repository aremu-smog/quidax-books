import React from "react";
import { Link } from "react-router-dom";
import { BrandFullIcon, BrandLiteIcon } from "../../../../../icons";
import { HideOnMobile, HideOnPc } from "../../../../../styles/common";

const QuidaxBookLogo = () => {
  return (
    <Link to="/">
      <HideOnMobile>
        <BrandFullIcon />
      </HideOnMobile>
      <HideOnPc>
        <BrandLiteIcon />
      </HideOnPc>
    </Link>
  );
};

export default QuidaxBookLogo;
