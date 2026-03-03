import React from "react";
import "@fontsource/lobster";
import "@fontsource-variable/caveat";
import "@fontsource-variable/oswald";

function HomePage() {
  return (
    <>
      <section1 className="relative mb-15 flex w-full">
        <div className="mb-5 ml-70 lg:mt-20 lg:flex lg:w-[50vw] lg:flex-col">
          <h1 className="font-caveat text-7xl font-bold">
            Delicious Baked <br></br> Goodness
          </h1>
          <p className="font-oswald w-130 text-left lg:mt-4 lg:mb-4">
            Baked goodness is comfort you can taste: warm, heat in an oven,
            turning simple ingredients into something special
          </p>
          <button className="font-exo2 bg-orange-400 px-[35px] py-[10px] text-white lg:w-[160px]">
            Shop now
          </button>
        </div>

        <img
          className="absolute right-26 z-[-10] mt-[-20px] h-100 w-180"
          src="/image/bigbread.png"
        />
      </section1>

      <section2 className="w-ful flex flex-col items-center justify-center">
        <p className="font-caveat text-5xl font-bold">Indulge in tThe Taste</p>
        <p className="font-oswald mt-4 w-100 text-center">
          the kind that makes you slow down, take a deeper bite, and let every
          flavor linger. take a deeper bite, and let every flavor linger
        </p>
        <p></p>
      </section2>

      <section3 className="relative mt-15 flex min-w-full justify-around space-x-19">
        <img
          className="absolute top-[-70px] right-95 h-120 w-140 object-contain"
          src="/image/bread basket.png"
        />
        <leftside className="flex h-100 flex-col justify-between">
          <div className="w-70">
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Gluten Free Food
            </p>
            <p className="font-oswald text-center">
              Gluten‑free food is food that doesn’t contain gluten, a group of
              proteins found in wheat, barley, and rye (and grains made from
              them, like triticale)
            </p>
          </div>

          <div className="w-70">
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Fresh Ingrediants
            </p>
            <p className="font-oswald text-center">
              Fresh ingredients are foods that are as close to their natural
              state as possible—like just-picked fruits and vegetables, fresh
              herbs texture in a dish
            </p>
          </div>
        </leftside>

        <rightside className="flex h-100 flex-col justify-between">
          <div className="w-70">
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Gluten Free Food
            </p>
            <p className="font-oswald text-center">
              Gluten‑free food is food that doesn’t contain gluten, a group of
              proteins found in wheat, barley, and rye (and grains made from
              them, like triticale)
            </p>
          </div>

          <div className="w-70">
            <p className="font-caveat mb-3 text-center text-2xl font-bold">
              Fresh Ingrediants
            </p>
            <p className="font-oswald text-center">
              Fresh ingredients are foods that are as close to their natural
              state as possible—like just-picked fruits and vegetables, fresh
              herbs texture in a dish
            </p>
          </div>
        </rightside>
      </section3>

      <section4 className="m mt-20 flex w-full flex-col items-center">
        <div className="flex w-170 flex-col items-center">
          <p className="font-caveat mt-4 mb-4 text-5xl font-bold">Our Menu</p>
          <p className="font-oswald w-100 text-center">
            Browse throughh our delectable menu of tasty treats and baked
            goodies
          </p>
        </div>

        <div className="mt-10 flex w-170 justify-around">
          <div className="product-logo"></div>
          <div className="product-logo"></div>
          <div className="product-logo"></div>
          <div className="product-logo"></div>
          <div className="product-logo"></div>
        </div>

        <div className="mt-0 w-170">
          <ul className="font-oswald flex">
            <li className="ml-12">Cookies</li>
            <li className="mr-24 ml-24">Cakse</li>
            <li>Pastries</li>
            <li className="mr-24 ml-23">Bread</li>
            <li>Cupcakes</li>
          </ul>

          <div className="font-oswald mt-9 flex">
            <div className="cart relative flex-1 text-center">
              mini cupcake <br></br>$100
              <img
                className="product-image left-[-10px] w-80 object-cover"
                src="/image/cupcake.png"
              />
            </div>
            <div className="cart relative mx-6 flex-1 text-center">
              fried cheese <br></br>$120
              <img className="product-image top-2" src="/image/products.png" />
            </div>
            <div className="cart relative flex-1 text-center">
              croissants <br></br>$130
              <img className="product-image" src="/image/bread.png" />
            </div>
          </div>
        </div>
      </section4>

      <section5 className="mt-15 flex w-full flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="heading">Our Blog</p>
          <p className="font-oswald w-67 text-center">
            Get the latest news about, food and health from our blog
          </p>
        </div>

        <div className="mt-10 flex">
          <div className="h-100 w-80">
            <div className="h-50 w-full overflow-hidden rounded-3xl">
              <img className="mt-[-74px]" src="/image/burger.png" />
            </div>
            <p className="font-roboto mt-4 ml-4 w-70">
              Our Top % Tips For Baking The Perfect, Flaky Croissant{" "}
            </p>
            <p className="mt-6 ml-4 text-gray-400">On December 11, 2026</p>
            <p className="font-roboto mt-3 ml-4 text-orange-400">Read More</p>
          </div>

          <div className="mx-10 h-100 w-80">
            <div className="h-50 w-full overflow-hidden rounded-3xl">
              <img className="h-50 w-full" src="/image/food2.jpg" />
            </div>
            <p className="font-roboto mt-4 ml-4 w-70">
              Our Top % Tips For Baking The Perfect, Flaky Croissant{" "}
            </p>
            <p className="mt-6 ml-4 text-gray-400">On December 11, 2026</p>
            <p className="font-roboto mt-3 ml-4 text-orange-400">Read More</p>
          </div>

          <div className="h-100 w-80">
            <div className="h-50 w-full overflow-hidden rounded-3xl bg-red-200">
              <img className="h-50 w-full" src="/image/food3.jpg" />
            </div>
            <p className="font-roboto mt-4 ml-4 w-70">
              Our Top % Tips For Baking The Perfect, Flaky Croissant{" "}
            </p>
            <p className="mt-6 ml-4 text-gray-400">On December 11, 2026</p>
            <p className="font-roboto mt-3 ml-4 text-orange-400">Read More</p>
          </div>
        </div>
      </section5>

      <section6 className="mt-8 flex flex-col items-center">
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
          <div className="font-oswald mr-20">
            <p>contact@gmail.com</p>
            <p className="my-10">+84 273873534</p>
            <p>62th , avenue galendale , usa</p>
          </div>

          <iframe
            className="h-100 w-150"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27507.193460988125!2d80.20866534134562!3d13.03273809265451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1772541040490!5m2!1sen!2sin"
          />
        </div>
      </section6>
    </>
  );
}

export default HomePage;
