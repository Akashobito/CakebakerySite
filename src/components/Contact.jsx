import React from 'react'

function Contact() {
  return (
      <section id="contact" className="mt-30 flex flex-col items-center pb-10 mobile:mt-10 mobile:pb-5 mobile:pt-16">
        <div>
          <p className="heading text-center mobile:w-90 mobile:mx-auto">
            Have Questions? Reach <br></br> Out To us
          </p>
          <p className="font-oswald mobile:text-sm mobile:w-70 mobile:text-center mobile:mx-auto">
            For any questions,reservations, or Special orders , feel free to
            contact us
          </p>
        </div>

        <div className="mt-15 flex items-center mobile:mt-2 mobile:flex-col">
          <div className="font-oswald mr-13 grid grid-cols-[30%_70%] items-center gap-y-4 mobile:mr-0 mobile:grid-cols-[23%_80%]">
            <a href="mailto: sakashcsbs2004@gmail.com">
              <div className="logo-div cursor-pointer">
                <i class="fa-solid fa-envelope text-xl mobile:text-sm text-white"></i>
              </div>
            </a>
            <a href="mailto: sakashcsbs2004@gmail.com">
              <p className="">sakashcsbs2004@gmail.com</p>
            </a>
            <a href="tel: +916383283581">
              <div className="logo-div">
                <i class="fa-solid fa-phone text-xl mobile:text-sm text-white"></i>
              </div>
            </a>
            <a href="tel: +916383283581">
              <p className="">+91 6383283581</p>
            </a>
            <div className="logo-div">
              <i class="fa-solid fa-location-arrow text-xl mobile:text-sm text-white"></i>
            </div>
            <p className="w-40">
              Grand Souther Trunk Rd,<br></br>Ashok Pillar,<br></br>{" "}
              Chennai-600048
            </p>
          </div>

          <iframe
            className="h-100 w-150 mobile:w-90 mobile:h-49 mobile:mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27507.193460988125!2d80.20866534134562!3d13.03273809265451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1772541040490!5m2!1sen!2sin"
          />
        </div>
      </section>
  )
}

export default Contact