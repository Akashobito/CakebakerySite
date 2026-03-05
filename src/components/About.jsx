import React from "react";
import chef from "../assets/icons/chef.png";
import glutenfree from "../assets/icons/gluten-free.png";
import ingredients from "../assets/icons/dairy-food.png";
import tasty from "../assets/icons/burger image.png";

function About() {
  return (
    <>
      <section
        id="about"
        className="w-ful mt-30 flex flex-col items-center justify-center pt-25"
      >
        <p className="font-caveat text-5xl font-bold">Indulge in The Taste</p>
        <p className="font-oswald mt-4 w-100 text-center">
          the kind that makes you slow down, take a deeper bite, and let every
          flavor linger. take a deeper bite, and let every flavor linger
        </p>
        <p></p>
      </section>

      <section className="relative mt-5 flex min-w-full justify-around space-x-19">
        <img
          className="absolute top-[-70px] right-108 h-120 w-140 object-contain"
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
    </>
  );
}

export default About;
