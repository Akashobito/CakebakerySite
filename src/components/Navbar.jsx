import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [pageTrack, setPageTrack] = useState("home");

  const handleUrl = (page) => {
    // console.log(page);
    setPageTrack(page);  //handle the url
  };

  useEffect(() => {
    window.location.hash = 'home'
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-[100] flex justify-center backdrop-blur-[5px]">
      <div className="flex w-100 items-center justify-center">
        <img className="mt-2 h-12 w-12" src="/image/foodcompanylogo.png" />
      </div>

      <ul className="font-roboto mt-3 flex w-160 justify-evenly p-2.5 [&_li]:cursor-pointer">
        <a
          onClick={() => {
            handleUrl("home");
          }}
          href="#home"
        >
          <li className={pageTrack === 'home'? 'text-amber-500':''}>HOME</li>
        </a>

        <a
          onClick={() => {
            handleUrl("about");
          }}
          href="#about"
        >
          <li className={pageTrack === 'about'? 'text-amber-500':''}>ABOUT</li>
        </a>

        <a
          onClick={() => {
            handleUrl("menu");
          }}
          href="#menu"
        >
          <li className={pageTrack === 'menu'? 'text-amber-500':''}>PRODUCT</li>
        </a>

        <a
          onClick={() => {
            handleUrl("blog");
          }}
          href="#blog"
        >
          <li className={pageTrack === 'blog'? 'text-amber-500':''}>BLOG</li>
        </a>

        <a
          onClick={() => {
            handleUrl("contact");
          }}
          href="#contact"
        >
          <li className={pageTrack === 'contact'? 'text-amber-500':''}>CONTACT</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
