import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="relative flex w-full overflow-hidden pt-20 pb-25"
    >
      <div className="mt-30 mb-5 ml-30 flex w-170 flex-col">
        <h1 className="font-caveat mt-10 text-8xl font-bold">
          Every Bite Feels Homemade
        </h1>
        <p className="font-oswald w-120 text-left lg:mt-4 lg:mb-5">
          Baked goodness is oven-fresh comfort—soft, sweet, and made special by
          the simplest things.
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
  );
}

export default Home;
