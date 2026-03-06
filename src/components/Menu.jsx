import React, { useEffect, useState } from "react";
import cake from "../assets/icons/cake.png";
import bread from "../assets/icons/bread.png";
import cookie from "../assets/icons/cookie.png";
import cupcake from "../assets/icons/cupcake.png";
import strawberrycake from "../assets/icons/strawberry-cake.png";
import baklava from '../../public/image/Baklava.png';
import blackForest from '../../public/image/Black Forest.png';
import classicVanilla from  '../../public/image/Classic Vanilla.png';
import creamPuff from '../../public/image/Cream puff.png';
import croissants from '../../public/image/Croissants.png';
import danishPastry from '../../public/image/Danish pastry.png';
import englishMuffin from '../../public/image/English muffin.png';
import focaccia from  '../../public/image/Focaccia.png';
import friedCheeseBalls from '../../public/image/Fried Cheese Balls.png';
import miniCupcake from  '../../public/image/Mini Cupcake.png';
import multigrain from '../../public/image/Multigrain.png';
import pistachio from  '../../public/image/Pistachio Cardamom Rose.png';
import rasmalai from '../../public/image/Rasmalai Cake.png';
import saltedCaramel from '../../public/image/Salted Caramel.png';
import tiramisu from '../../public/image/Tiramisu.png';

function Menu() {
  const [menuFinder, setMenuFinder] = useState("cakes");
  const initialProduct = [
    {
      name: "Rasmalai Cake",
      price: "₹100",
    },
    {
      name: "Black Forest",
      price: "₹120",
    },
    {
      name: "Pistachio Cardamom Rose",
      price: "₹130",
    },
  ];

  const [menuProduct, setMenuProduct] = useState(initialProduct);

  const handleMenu = (option) => {
    setMenuFinder(option); //achieve the menu changing option by using the handlemenu and the conditional rendering technique
  };

  const handleMenuProduct = (option) => {
    if (option == "cakes") {
      setMenuProduct(initialProduct);
    } else if (option === "cookie") {
      const updatedOption = [
        {
          name: "Mini Cupcake",
          price: "₹100",
        },
        {
          name: "Fried Cheese Balls",
          price: "₹120",
        },
        {
          name: "Croissants",
          price: "₹130",
        },
      ];

      setMenuProduct(updatedOption);
    } else if (option === "pastries") {
      const updatedOption = [
        {
          name: "Baklava",
          price: "₹100",
        },
        {
          name: "Cream puff",
          price: "₹120",
        },
        {
          name: "Danish pastry",
          price: "₹130",
        },
      ];

      setMenuProduct(updatedOption);
    } else if (option === "bread") {
      const updatedOption = [
        {
          name: "Multigrain",
          price: "₹100",
        },
        {
          name: "Focaccia",
          price: "₹120",
        },
        {
          name: "English muffin",
          price: "₹130",
        },
      ];

      setMenuProduct(updatedOption);
    } else if (option === "cupcakes") {
      const updatedOption = [
        {
          name: "Classic Vanilla",
          price: "₹100",
        },
        {
          name: "Salted Caramel",
          price: "₹120",
        },
        {
          name: "Tiramisu",
          price: "₹130",
        },
      ];
      setMenuProduct(updatedOption);
    }
  };

  useEffect(()=>{
    const images = [baklava,blackForest,classicVanilla,croissants,danishPastry,englishMuffin,focaccia,friedCheeseBalls,
     miniCupcake,creamPuff,multigrain,pistachio,rasmalai,saltedCaramel,tiramisu];

    images.forEach((image)=>{
      const imageElement = new Image();
      imageElement.src= image;
      // console.log(imageElement)
    });
  },[])     /*Advance technique of image preloading at render the site*/

  return (
    <section
      id="menu"
      className=" mt-20 flex w-full flex-col items-center pt-20 mobile:pt-15 mobile:mt-0"
    >
      {/* <img className="hidden" src={baklava}/>  image preloading technique
      <img className="hidden" src={blackForest}/>
      <img className="hidden" src={classicVanilla}/>
      <img className="hidden" src={creamPuff}/>
      <img className="hidden" src={croissants}/>
      <img className="hidden" src={danishPastry}/>
      <img className="hidden" src={englishMuffin}/>
      <img className="hidden" src={focaccia}/>
      <img className="hidden" src={friedCheeseBalls}/>
      <img className="hidden" src={miniCupcake}/>
      <img className="hidden" src={multigrain}/>
      <img className="hidden" src={pistachio}/>
      <img className="hidden" src={rasmalai}/>
      <img className="hidden" src={saltedCaramel}/>
      <img className="hidden" src={tiramisu}/> */}

      <div className="flex w-170 flex-col items-center mobile:w-full">
        <p className="font-caveat mt-4 mb-4 text-5xl font-bold">Our Menu</p>
        <p className="font-oswald w-100 text-center mobile:text-sm mobile:w-70">
          Browse throughh our delectable menu of tasty treats and baked goodies
        </p>
      </div>

      <div className="mt-10 flex w-240 justify-around mobile:w-full">
        <div
          onClick={() => {
            handleMenu("cakes");
            handleMenuProduct("cakes");
          }}
          className="group flex-col space-y-1"
        >
          <div className="product-logo hover-action-2 peer relative">
            <img className="icons hover-image-action" src={cake} />
          </div>
          <p
            className={
              menuFinder === "cakes"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500 mobile:text-sm"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500 mobile:text-sm"
            }
          >
            Cakes
          </p>
        </div>

        <div
          onClick={() => {
            handleMenu("cookie");
            handleMenuProduct("cookie");
          }}
          className="group cursor-pointer flex-col space-y-1"
        >
          <div className="product-logo hover-action-2 peer relative">
            <img className="icons hover-image-action" src={cookie} />
          </div>
          <p
            className={
              menuFinder === "cookie"
                ? "font-oswald hover-p text-center text-amber-500 transition peer-hover:text-amber-500 mobile:text-sm"
                : "font-oswald hover-p text-center transition peer-hover:text-amber-500 mobile:text-sm"
            }
          >
            Cookies
          </p>
        </div>

        <div
          onClick={() => {
            handleMenu("pastries");
            handleMenuProduct("pastries");
          }}
          className="group flex-col space-y-1"
        >
          <div className="product-logo hover-action-2 peer relative">
            <img className="icons hover-image-action" src={cupcake} />
          </div>
          <p
            className={
              menuFinder === "pastries"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500 mobile:text-sm"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500 mobile:text-sm"
            }
          >
            Pastries
          </p>
        </div>

        <div
          onClick={() => {
            handleMenu("bread");
            handleMenuProduct("bread");
          }}
          className="group flex-col space-y-1"
        >
          <div className="product-logo hover-action-2 peer relative">
            <img className="icons hover-image-action w-12 ml-0.5" src={bread} />
          </div>
          <p
            className={
              menuFinder === "bread"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500 mobile:text-sm"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500 mobile:text-sm"
            }
          >
            Bread
          </p>
        </div>

        <div
          onClick={() => {
            handleMenu("cupcakes");
            handleMenuProduct("cupcakes");
          }}
          className="group flex-col space-y-1"
        >
          <div className="product-logo hover-action-2 peer relative">
            <img className="icons hover-image-action" src={strawberrycake} />
          </div>
          <p
            className={
              menuFinder === "cupcakes"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500 mobile:text-sm"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500 mobile:text-sm"
            }
          >
            Cupcakes
          </p>
        </div>
      </div>

      <div className="mt-0 w-270 mobile:w-full">
        <div className="font-oswald mt-9 flex space-x-20 mobile:flex-col mobile:space-x-0 mobile:items-center mobile:h-210 mobile:gap-y-10">
          {menuProduct.map((products, index) => {
            return (
              <div
                key={index}
                className="cart hover-action group relative flex-1 text-center mobile:text-sm"
              >
                {products.name} <br></br>
                {products.price}
                <img
                  className="product-image hover-image-action w-70"
                  src={`/image/${products.name}.png`}
                />
              </div>
            );
          })}

          {/* <div className="cart hover-action group relative flex-1 text-center">
                  mini cupcake <br></br>$100
                  <img
                    className="product-image hover-image-action left-[-10px] w-70"
                    src="/image/Mini Cupcake.png"
                  />
                </div>
                <div className="cart hover-action group relative flex-1 text-center">
                  fried cheese <br></br>$120
                  <img
                    className="product-image hover-image-action top-2"
                    src="/image/fried cheese ball.png"
                  />
                </div>
                <div className="cart hover-action group relative flex-1 text-center">
                  croissants <br></br>$130
                  <img
                    className="product-image hover-image-action"
                    src="/image/croissants.png"
                  />
                </div> */}
        </div>
      </div>
    </section>
  );
}

export default Menu;
