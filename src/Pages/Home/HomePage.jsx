import React from 'react'
import '@fontsource/lobster'
import '@fontsource-variable/caveat';
import '@fontsource-variable/oswald';

function HomePage() {
  return (
    <>
      <section1 className='w-full flex justify-center mb-15'>
        <div className='lg:flex lg:flex-col lg:w-[50vw] lg:ml-[50px] lg:mt-20'>
          <h1 className='font-caveat text-7xl font-bold'>Delicious Baked <br></br> Goodness</h1>
          <p className='lg:mt-4 lg:mb-4 font-oswald w-130 text-left'>Baked goodness is comfort you can taste: warm, heat in an oven, turning simple ingredients into something special</p>
          <button className='lg:w-[160px] bg-orange-400 text-white py-[10px] px-[35px] font-exo2'>
            Shop now
          </button>
        </div>

        <img src='' />
      </section1>

      <section2 className='w-ful flex flex-col justify-center items-center'>
        <p className='font-caveat font-bold text-5xl'>Indulge in tThe Taste</p>
        <p className='font-oswald w-100 text-center mt-4'>the kind that makes you slow down, take a deeper bite, and let every flavor linger.
          take a deeper bite, and let every flavor linger
        </p>
        <p></p>
      </section2>

      <section3 className='min-w-full flex justify-around mt-15'>
        <leftside className='h-100 flex flex-col justify-between'>
          <div className='w-70'>
            <p className='font-caveat text-2xl font-bold text-center mb-3'>Gluten Free Food</p>
            <p className='font-oswald text-center'>Gluten‑free food is food that doesn’t contain gluten, a group of proteins found in wheat, barley, and rye (and grains made from them, like triticale)</p>
          </div>

          <div className='w-70'>
            <p className='font-caveat text-2xl font-bold text-center mb-3'>Fresh Ingrediants</p>
            <p className='font-oswald text-center'>Fresh ingredients are foods that are as close to their natural state as possible—like just-picked fruits and vegetables, fresh herbs texture in a dish</p>
          </div>
        </leftside>
        
        <rightside className='h-100 flex flex-col justify-between'>
          <div className='w-70'>
            <p className='font-caveat text-2xl font-bold text-center mb-3'>Gluten Free Food</p>
            <p className='font-oswald text-center'>Gluten‑free food is food that doesn’t contain gluten, a group of proteins found in wheat, barley, and rye (and grains made from them, like triticale)</p>
          </div>

          <div className='w-70'>
            <p className='font-caveat text-2xl font-bold text-center mb-3'>Fresh Ingrediants</p>
            <p className='font-oswald text-center'>Fresh ingredients are foods that are as close to their natural state as possible—like just-picked fruits and vegetables, fresh herbs texture in a dish</p>
          </div>
        </rightside>
      </section3>

      <section4 className='w-full flex flex-col items-center'>
        <div className='w-170 flex flex-col items-center'>
          <p className='font-caveat text-5xl font-bold mt-4 mb-4'>Our Menu</p>
          <p className='font-oswald w-100 text-center' >Browse throughh our delectable menu of tasty treats and baked goodies</p>
        </div>

        <div className='w-170 mt-4'>
          <ul className='flex justify-around font-oswald'>
            <li>Cookies</li>
            <li>Cakse</li>
            <li>Pastries</li>
            <li>Bread</li>
            <li>Cupcakes</li>
          </ul>

          <div className='flex mt-9'>
            <div className='flex-1  cart'>mini cupcake</div>
            <div className='flex-1  mx-6 cart'>fried cheese</div>
            <div className='flex-1  cart'>croissants</div>
          </div>
        </div>
      </section4>

      <section5 className='w-full flex flex-col items-center mt-15'>
        <div className='flex flex-col items-center'>
          <p className='heading'>Our Blog</p>
          <p className='font-oswald w-67 text-center'>Get the latest news about, food and health from our blog</p>
        </div>

        <div className='flex mt-10'>
          <div className='w-80 h-100 '>
            <img className='bg-red-200 w-full h-50 rounded-3xl'/>
            <p className='font-roboto w-70 mt-4 ml-4'>Our Top % Tips For Baking The Perfect, Flaky Croissant </p>
            <p className='text-gray-400 mt-6 ml-4'>On December 11, 2026</p>
            <p className='ml-4 font-roboto mt-3 text-orange-400'>Read More</p>
          </div>

          <div className='w-80 h-100 mx-10 '>
            <img className='bg-red-200 w-full h-50 rounded-3xl'/>
            <p className='font-roboto w-70 mt-4 ml-4'>Our Top % Tips For Baking The Perfect, Flaky Croissant </p>
            <p className='text-gray-400 mt-6 ml-4'>On December 11, 2026</p>
            <p className='ml-4 font-roboto mt-3 text-orange-400'>Read More</p>
          </div>
          
          <div className='w-80 h-100 '>
            <img className='bg-red-200 w-full h-50 rounded-3xl'/>
            <p className='font-roboto w-70 mt-4 ml-4'>Our Top % Tips For Baking The Perfect, Flaky Croissant </p>
            <p className='text-gray-400 mt-6 ml-4'>On December 11, 2026</p>
            <p className='ml-4 font-roboto mt-3 text-orange-400'>Read More</p>
          </div>
        </div>
      </section5>

      <section6 className='flex flex-col items-center mt-8'>
        <div>
          <p className='heading text-center'>Have Questions? Reach <br></br> Out To us</p>
          <p className='font-oswald'>For any questions,reservations, or Special orders , feel free to contact us</p>
        </div>

        <div className='flex mt-15 items-center'>
          <div className='font-oswald mr-20'>
            <p>contact@gmail.com</p>
            <p className='my-10'>+84 273873534</p>
            <p>62th , avenue galendale , usa</p>
          </div>

          <iframe className='w-150 h-100' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27507.193460988125!2d80.20866534134562!3d13.03273809265451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1772541040490!5m2!1sen!2sin'/>   

        </div>
      </section6>
    </>
  )
}

export default HomePage