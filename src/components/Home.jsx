import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="relative flex w-full overflow-hidden pt-20 pb-25 mobile:w-full mobile:justify-around mobile:pb-0"
    >
      <div className="mt-30 mb-5 ml-30 flex w-170 flex-col mobile:m-0  mobile:w-full mobile:relative mobile:items-center ">
        <h1 className="font-caveat mt-10 text-8xl font-bold mobile:text-5xl mobile:w-70 mobile:order-2 mobile:mt-[-40px] mobile:text-center">
          Every Bite Feels Homemade 
        </h1>
        <p className="font-oswald w-120 text-left lg:mt-4 lg:mb-5 mobile:text-sm mobile:w-60 mobile:mt-3 mobile:mb-3 mobile:order-3 mobile:text-center">
          Baked goodness is oven-fresh comfort—soft, sweet, and made special by
          the simplest things.
        </p>
        <button className="font-exo2 peer bg-orange-400 px-[35px] py-[10px] text-white hover:cursor-pointer lg:w-[160px]  mobile:w-19 mobile:text-[12px] mobile:py-1 mobile:px-[0px] mobile:order-4 mobile:mx-auto">
          Shop now
        </button>

        <img
          className="absolute right-0 z-[-10] mt-[-140px] h-150 w-250 transition duration-500 peer-hover:scale-110 mobile:w-140 mobile:h-80 mobile:m-11 mobile:object-contain mobile:static mobile:order-1 mobile:mx-auto"
          src="/image/HoneyCake.png"
        />

        <p className="font-caveat text-5xl font-bold mb-[-40px] tracking-widest hidden mobile:block ">Welcome</p>
      </div>
    </section>
  );
}

export default Home;
