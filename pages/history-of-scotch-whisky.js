import React from "react";

import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function History(pageProps) {
  const title = "History of Scotch Whisky?";
  return (
    <>
      <DrawerAppBar title={navItems[2].title} />
      <FullPage defaultdata={defaultdata} />
    </>
  );
}
