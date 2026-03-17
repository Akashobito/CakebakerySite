import React, { useEffect, useState } from "react";
import "@fontsource/lobster";
import "@fontsource-variable/caveat";
import "@fontsource-variable/oswald";
import "@fontsource-variable/roboto";

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Blog from "./Blog";
import Contact from "./Contact";
import Navbar from "./Navbar";
import LoginCard from "./LoginCard";

function Website() {
  const [islogin, setIsLogin] = useState(false)

  /*  useEffect(() => {
    console.log(menuProduct);
  }, [menuProduct]); */

  useEffect(()=>{
    const loginInterval = setTimeout(()=>{
      setIsLogin(true)
    },2000)

    return () => {
      clearInterval(loginInterval)
    }
  },[])

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Blog />
      <Contact />
      {islogin && <LoginCard setIsLogin={setIsLogin} />}
    </>
  );
}

export default Website;
