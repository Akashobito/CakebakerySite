import React, { useState } from "react";
import cake from "../assets/icons/cake.png";
import bread from "../assets/icons/bread.png";
import cookie from "../assets/icons/cookie.png";
import cupcake from "../assets/icons/cupcake.png";
import strawberrycake from "../assets/icons/strawberry-cake.png";

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

  return (
    <section
      id="menu"
      className="m mt-20 flex w-full flex-col items-center pt-20"
    >
      <div className="flex w-170 flex-col items-center">
        <p className="font-caveat mt-4 mb-4 text-5xl font-bold">Our Menu</p>
        <p className="font-oswald w-100 text-center">
          Browse throughh our delectable menu of tasty treats and baked goodies
        </p>
      </div>

      <div className="mt-10 flex w-240 justify-around">
        <div
          onClick={() => {
            handleMenu("cakes");
            handleMenuProduct("cakes");
          }}
          className="group flex-col space-y-1"
        >
          <div className="product-logo hover-action-2 peer">
            <img className="icons hover-image-action" src={cake} />
          </div>
          <p
            className={
              menuFinder === "cakes"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500"
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
          <div className="product-logo hover-action-2 peer">
            <img className="icons hover-image-action" src={cookie} />
          </div>
          <p
            className={
              menuFinder === "cookie"
                ? "font-oswald hover-p text-center text-amber-500 transition peer-hover:text-amber-500"
                : "font-oswald hover-p text-center transition peer-hover:text-amber-500"
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
          <div className="product-logo hover-action-2 peer">
            <img className="icons hover-image-action" src={cupcake} />
          </div>
          <p
            className={
              menuFinder === "pastries"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500"
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
          <div className="product-logo hover-action-2 peer">
            <img className="icons hover-image-action w-11" src={bread} />
          </div>
          <p
            className={
              menuFinder === "bread"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500"
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
          <div className="product-logo hover-action-2 peer">
            <img className="icons hover-image-action" src={strawberrycake} />
          </div>
          <p
            className={
              menuFinder === "cupcakes"
                ? "font-oswald hover-menu text-center text-amber-500 transition peer-hover:text-amber-500"
                : "font-oswald hover-menu text-center transition peer-hover:text-amber-500"
            }
          >
            Cupcakes
          </p>
        </div>
      </div>

      <div className="mt-0 w-270">
        <div className="font-oswald mt-9 flex space-x-20">
          {menuProduct.map((products, index) => {
            return (
              <div
                key={index}
                className="cart hover-action group relative flex-1 text-center"
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
