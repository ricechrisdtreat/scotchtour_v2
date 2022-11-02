import React from "react";

import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Regions(pageProps) {
  const title = "Regions of Origin";
  return (
    <>
      <DrawerAppBar title={navItems[4].title} />
      <FullPage defaultdata={defaultdata} />
    </>
  );
}
