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
import LoadingPage from "./LoadingPage";
import LoginSuccessfull from "./LoginSuccessfull";

function Website() {
  const [islogin, setIsLogin] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isLoginSuccess, setIsLoginSucess] = useState(false);

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
      {islogin && <LoginCard setIsLogin={setIsLogin} setIsloading={setIsloading}/>}
      {isLoading && <LoadingPage setIsloading={setIsloading} setIsLoginSucess={setIsLoginSucess}/>}
      {isLoginSuccess && <LoginSuccessfull setIsLoginSucess={setIsLoginSucess}/>}

    </>
  );
}

export default Website;
