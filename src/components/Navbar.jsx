import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="flex w-100 items-center justify-center">
        <img className="w-12 h-12 mt-2 " src="/image/foodcompanylogo.png" />
      </div>

      <ul className="mt-3 font-roboto flex w-160 justify-evenly p-2.5 [&_li]:cursor-pointer">
        <li>HOME</li>
        <li>ABOUTUS</li>
        <li>PRODUCT</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default Navbar;
