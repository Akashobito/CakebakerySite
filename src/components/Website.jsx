import React, { useEffect, useState } from "react";
import "@fontsource/lobster";
import "@fontsource-variable/caveat";
import "@fontsource-variable/oswald";

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Blog from "./Blog";
import Contact from "./Contact";
import Navbar from "./Navbar";

function Website() {
 
  /*  useEffect(() => {
    console.log(menuProduct);
  }, [menuProduct]); */

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Blog />
      <Contact />
    </>
  );
}

export default Website;
