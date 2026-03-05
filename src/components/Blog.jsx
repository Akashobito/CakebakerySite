import React from 'react'

function Blog() {
  return (
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
  )
}

export default Blog