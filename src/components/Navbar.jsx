import React, { useEffect, useRef, useState } from "react";

function Navbar({isAccCreated,setIsLogin,setShowUserAccount,interval}) {
  const [pageTrack, setPageTrack] = useState("home");

  const handleUrl = (page) => {
    // console.log(page);
    setPageTrack(page); //handle the url
  };

  const handleUserInfo = () => {
    if(isAccCreated){
      setShowUserAccount(true)
    }else{
      clearInterval(interval.current); //to control the overlap of setInterval to show up the login page
      setIsLogin(true)
    }
  }

  useEffect(() => {
    window.location.hash = "home";
  }, []);

  return (
    <div className="mobile:w-full mobile:justify-start mobile:pt-0 fixed top-0 right-0 left-0 z-[100] flex justify-center backdrop-blur-[5px]">
      <div className="mobile:w-20 flex w-100 items-center justify-center">
        <a
          onClick={() => {
            handleUrl("home");
          }}
          href="#home"
        >
          <img className="mt-2 h-12 w-12" src="/image/foodcompanylogo.png" />
        </a>
      </div>

      <ul className="font-Roboto mobile:w-90 mobile:text-sm mobile:justify-between mt-3 flex w-160 justify-evenly p-2.5 [&_li]:cursor-pointer">
        <a
          onClick={() => {
            handleUrl("home");
          }}
          href="#home"
        >
          <li className={pageTrack === "home" ? "text-amber-500" : ""}>HOME</li>
        </a>

        <a
          onClick={() => {
            handleUrl("about");
          }}
          href="#about"
        >
          <li className={pageTrack === "about" ? "text-amber-500" : ""}>
            ABOUT
          </li>
        </a>

        <a
          onClick={() => {
            handleUrl("menu");
          }}
          href="#menu"
        >
          <li className={pageTrack === "menu" ? "text-amber-500" : ""}>
            PRODUCT
          </li>
        </a>

        <a
          onClick={() => {
            handleUrl("blog");
          }}
          href="#blog"
        >
          <li className={pageTrack === "blog" ? "text-amber-500" : ""}>BLOG</li>
        </a>

        <a
          onClick={() => {
            handleUrl("contact");
          }}
          href="#contact"
        >
          <li className={pageTrack === "contact" ? "text-amber-500" : ""}>
            CONTACT
          </li>
        </a>
      </ul>
      <div onClick={handleUserInfo} className="flex items-center cursor-pointer">
        <i className="fa-solid fa-circle-user text-3xl relative top-1 right-10 text-orange-400 mobile:top-1 mobile:right-1.5 "></i>
      </div>
    </div>
  );
}

export default Navbar;
