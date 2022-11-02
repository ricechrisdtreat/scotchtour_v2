import React from "react";

import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Process(pageProps) {
  const title = "How Scotch is Made";
  return (
    <>
      <DrawerAppBar title={navItems[3].title} />
      <FullPage defaultdata={defaultdata} />
    </>
  );
}
