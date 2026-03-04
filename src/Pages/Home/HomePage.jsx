import React, { useEffect, useState } from "react";
import "@fontsource/lobster";
import "@fontsource-variable/caveat";
import "@fontsource-variable/oswald";
import cake from "../../assets/icons/cake.png";
import bread from "../../assets/icons/bread.png";
import cookie from "../../assets/icons/cookie.png";
import cupcake from "../../assets/icons/cupcake.png";
import strawberrycake from "../../assets/icons/strawberry-cake.png";
import chef from "../../assets/icons/chef.png";
import glutenfree from "../../assets/icons/gluten-free.png";
import ingredients from "../../assets/icons/dairy-food.png";
import tasty from "../../assets/icons/burger image.png";

function HomePage() {
  const [menu, setMenu] = useState("cookie");
  const initialProduct = [
    {
      name: "Mini Cupcake",
      price: "$100",
    },
    {
      name: "fried cheese ball",
      price: "$120",
    },
    {
      name: "croissants",
      price: "$130",
    },
  ];

  const [menuProduct, setMenuProduct] = useState(initialProduct);

  const handleMenu = (option) => {
    setMenu(option);   //achieve the menu changing option by using the handlemenu and the conditional rendering technique 
  };

  const handleMenuProduct = (option) => {
    if (option == "cookie") {
      setMenuProduct(initialProduct);

    } else if (option === "cakes") {
      const updatedOption = [
        {
          name: "Rasmalai Cake",
          price: "$100",
        },
        {
          name: "Black Forest",
          price: "$120",
        },
        {
          name: "Pistachio Cardamom Rose",
          price: "$130",
        },
      ];

      setMenuProduct(updatedOption);
    } else if (option === "pastries") {
      const updatedOption = [
        {
          name: "Baklava",
          price: "$100",
        },
        {
          name: "Cream puff",
          price: "$120",
        },
        {
          name: "Danish pastry",
          price: "$130",
        },
      ];

      setMenuProduct(updatedOption);
    } else if (option === "bread") {
      const updatedOption = [
        {
          name: "Multigrain",
          price: "$100",
        },
        {
          name: "Focaccia",
          price: "$120",
        },
        {
          name: "English muffin",
          price: "$130",
        },
      ];

      setMenuProduct(updatedOption);
    } else if (option === "cupcakes") {
      const updatedOption = [
        {
          name: "Classic Vanilla",
          price: "$100",
        },
        {
          name: "Salted Caramel",
          price: "$120",
        },
        {
          name: "Tiramisu",
          price: "$130",
        },
      ];
      setMenuProduct(updatedOption);
    }
  };

 /*  useEffect(() => {
    console.log(menuProduct);
  }, [menuProduct]); */

  return (
    <>
      <section
        id="home"
        className="relative flex w-full overflow-hidden pt-20 pb-25"
      >
        <div className="mt-30 mb-5 ml-30 flex w-170 flex-col">
          <h1 className="font-caveat mt-10 text-8xl font-bold">
            Delicious Baked <br></br> Goodness
          </h1>
          <p className="font-oswald w-120 text-left lg:mt-4 lg:mb-5">
            Baked goodness is comfort you can taste: warm, heat in an oven,
            turning simple ingredients into something special
          </p>
          <button className="font-exo2 peer bg-orange-400 px-[35px] py-[10px] text-white hover:cursor-pointer lg:w-[160px]">
            Shop now
          </button>

          <img
            className="absolute right-0 z-[-10] mt-[-140px] h-150 w-250 transition duration-500 peer-hover:scale-110"
            src="/image/bigbread.png"
          />
        </div>
      </section>

      <section
        id="about"
        className="w-ful mt-30 flex flex-col items-center justify-center pt-25"
      >
        <p className="font-caveat text-5xl font-bold">Indulge in tThe Taste</p>
        <p className="font-oswald mt-4 w-100 text-center">
          the kind that makes you slow down, take a deeper bite, and let every
          flavor linger. take a deeper bite, and let every flavor linger
        </p>
        <p></p>
      </section>

      <section className="relative mt-5 flex min-w-full justify-around space-x-19">
        <img
          className="absolute top-[-70px] right-95 h-120 w-140 object-contain"
          src="/image/bread basket.png"
        />
        <div className="flex h-110 flex-col justify-between">
          <div className="flex w-70 flex-col items-center">
            <div className="product-logo">
              <img className="icons-indulge" src={glutenfree} />
            </div>
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Gluten Free Food
            </p>
            <p className="font-oswald text-center">
              Everything on our menu has gluten free options for you. Healthy
              food has neveer tasted better. try it today.
            </p>
          </div>

          <div className="flex w-70 flex-col items-center">
            <div className="product-logo">
              <img className="icons-indulge" src={ingredients} />
            </div>
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Fresh Ingrediants
            </p>
            <p className="font-oswald text-center">
              We use only fresh ingredients from local suppliers for our food.
              Get a taste of the best quality baked goods today.
            </p>
          </div>
        </div>

        <div className="flex h-110 flex-col justify-between">
          <div className="flex w-70 flex-col items-center">
            <div className="product-logo">
              <img className="icons-indulge" src={chef} />
            </div>
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Homemade Bread
            </p>
            <p className="font-oswald text-center">
              Tease the best, oven fresh gourmet homemade bread , cookies, ckes,
              pastries, cutomized cakes, cream rolls and much more.
            </p>
          </div>

          <div className="flex w-70 flex-col items-center">
            <div className="product-logo">
              <img className="icons-indulge w-12 object-cover" src={tasty} />
            </div>
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Healthy & Tasty
            </p>
            <p className="font-oswald text-center">
              Live a healthier life with freshly baked food that tastes good.
              Get our delicious baked food fresh out of the oven.
            </p>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="m mt-20 flex w-full flex-col items-center pt-20"
      >
        <div className="flex w-170 flex-col items-center">
          <p className="font-caveat mt-4 mb-4 text-5xl font-bold">Our Menu</p>
          <p className="font-oswald w-100 text-center">
            Browse throughh our delectable menu of tasty treats and baked
            goodies
          </p>
        </div>

        <div className="mt-10 flex w-240 justify-around">
          <div
            onClick={() => {
              handleMenu("cookie");
              handleMenuProduct("cookie");
            }}
            className="flex-col space-y-1 cursor-pointer group">

            <div className="product-logo hover-action-2 peer">
              <img className="icons hover-image-action" src={cookie} />
            </div>
            <p
              className={
                menu === "cookie"
                  ? "font-oswald text-center text-amber-500 transition peer-hover:text-amber-500 hover-p"
                  : "font-oswald text-center transition peer-hover:text-amber-50 hover-p"
              }
            >
              Cookies
            </p>
          </div>

          <div
            onClick={() => {
              handleMenu("cakes");
              handleMenuProduct("cakes");
            }}
            className="flex-col space-y-1 group"
          >
            <div className="product-logo hover-action-2 peer">
              <img className="icons hover-image-action" src={cake} />
            </div>
            <p
              className={
                menu === "cakes"
                  ? "font-oswald text-center text-amber-500 transition peer-hover:text-amber-500 hover-menu"
                  : "font-oswald text-center transition peer-hover:text-amber-500 hover-menu"
              }
            >
              Cakes
            </p>
          </div>

          <div
            onClick={() => {
              handleMenu("pastries");
              handleMenuProduct("pastries");
            }}
            className="flex-col space-y-1 group"
          >
            <div className="product-logo hover-action-2 peer">
              <img className="icons hover-image-action" src={cupcake} />
            </div>
            <p
              className={
                menu === "pastries"
                  ? "font-oswald text-center text-amber-500 transition peer-hover:text-amber-500 hover-menu"
                  : "font-oswald text-center transition peer-hover:text-amber-500 hover-menu"
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
            className="flex-col space-y-1 group"
          >
            <div className="product-logo hover-action-2 peer">
              <img className="icons hover-image-action w-11" src={bread} />
            </div>
            <p
              className={
                menu === "bread"
                  ? "font-oswald text-center text-amber-500 transition peer-hover:text-amber-500 hover-menu"
                  : "font-oswald text-center transition peer-hover:text-amber-500 hover-menu"
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
            className="flex-col space-y-1 group"
          >
            <div className="product-logo hover-action-2 peer ">
              <img className="icons hover-image-action" src={strawberrycake} />
            </div>
            <p
              className={
                menu === "cupcakes"
                  ? "font-oswald text-center text-amber-500 transition peer-hover:text-amber-500 hover-menu"
                  : "font-oswald text-center transition peer-hover:text-amber-500 hover-menu"
              }
            >
              Cupcakes
            </p>
          </div>
        </div>

        <div className="mt-0 w-270">
          <div className="font-oswald mt-9 flex space-x-20">
            {menuProduct.map((products,index) => {
              return (
                <div key={index} className="cart hover-action group relative flex-1 text-center">
                  {products.name} <br></br>$100
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

      <section
        id="blog"
        className="mt-25 flex w-full flex-col items-center pt-20"
      >
        <div className="flex flex-col items-center">
          <p className="heading">Our Blog</p>
          <p className="font-oswald w-67 text-center">
            Get the latest news about, food and health from our blog
          </p>
        </div>

        <div className="mt-10 flex w-270">
          <div className="blog-div hover-action h-100 w-80 transition">
            <div className="h-50 w-full overflow-hidden rounded-3xl">
              <img className="mt-[-74px]" src="/image/burger.png" />
            </div>
            <p className="font-roboto mt-4 ml-4 w-70">
              Our Top % Tips For Baking The Perfect, Flaky Croissant
            </p>
            <p className="mt-6 ml-4 text-gray-400">On December 11, 2026</p>
            <p className="font-roboto mt-3 ml-4 text-orange-400">Read More</p>
          </div>

          <div className="blog-div hover-action mx-10 h-100 w-80 transition">
            <div className="h-50 w-full overflow-hidden rounded-3xl">
              <img className="h-50 w-full" src="/image/food2.jpg" />
            </div>
            <p className="font-roboto mt-4 ml-4 w-70">
              Baking For Beginners: Things To Know About Kneading
            </p>
            <p className="mt-6 ml-4 text-gray-400">On December 11, 2026</p>
            <p className="font-roboto mt-3 ml-4 text-orange-400">Read More</p>
          </div>

          <div className="blog-div hover-action h-100 w-80 transition">
            <div className="h-50 w-full overflow-hidden rounded-3xl bg-red-200">
              <img className="h-50 w-full" src="/image/food3.jpg" />
            </div>
            <p className="font-roboto mt-4 ml-4 w-70">
              Guide To Gluten Free Life: 16 Recepe And Ourt Top Tips
            </p>
            <p className="mt-6 ml-4 text-gray-400">On December 11, 2026</p>
            <p className="font-roboto mt-3 ml-4 text-orange-400">Read More</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-30 flex flex-col items-center pb-10">
        <div>
          <p className="heading text-center">
            Have Questions? Reach <br></br> Out To us
          </p>
          <p className="font-oswald">
            For any questions,reservations, or Special orders , feel free to
            contact us
          </p>
        </div>

        <div className="mt-15 flex items-center">
          <div className="font-oswald mr-13 grid grid-cols-[30%_70%] items-center gap-x-2 gap-y-4">
            <div className="logo-div">
              <i class="fa-solid fa-envelope text-xl text-white"></i>
            </div>
            <p className="">contact@gmail.com</p>
            <div className="logo-div">
              <i class="fa-solid fa-phone text-xl text-white"></i>
            </div>
            <p className="">+84 273873534</p>
            <div className="logo-div">
              <i class="fa-solid fa-location-arrow text-xl text-white"></i>
            </div>
            <p>62th , avenue galendale , usa</p>
          </div>

          <iframe
            className="h-100 w-150"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27507.193460988125!2d80.20866534134562!3d13.03273809265451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1772541040490!5m2!1sen!2sin"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;
