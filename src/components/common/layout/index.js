import React from "react";
import Cart from "../../cart";

import MainHeader from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Cart />
      <MainHeader />

      <main>{children}</main>
    </>
  );
};

export default Layout;
