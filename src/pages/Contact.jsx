import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import left from '../assets/img/contact/left.png'
import right from '../assets/img/contact/right.png'


function Contact() {
  return (
    <div>
      <Header />
      <section className="pt-24 md:pb-20">
        <div className="max-w-[1240px] px-5 mx-auto">
          <div className="text-center">
            <h1 className="md:spacing_title text-[#3B668D] font-black text-5xl md:text-7xl leading-[70px] uppercase mb-2">Contact</h1>
            <p className="md:spacing_2 spacing_title text-[#3B668D] text-xl md:text-2xl uppercase md:mb-11 mb-14">Online storage</p>
          </div>
        </div>
      </section>
      <iframe className="bg-[#A270FF]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.607663875116!2d33.35568847556644!3d35.14146307276628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de198da1a76cf5%3A0x1b780c6ea06ba585!2sCostas%20Theodorou%20Shopping%20Centre!5e0!3m2!1sru!2s!4v1717050268365!5m2!1sru!2s"
        width="100%" height="800" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <section className="pt-[169px] md:pb-[449px] pb-0 relative">
        <img className="absolute md:block hidden left-0" src={left} alt="left arrow" />
        <img className="absolute md:block hidden right-0 top-[40px]" src={right} alt="right arrow" />
        <div className="max-w-[749px] text-center px-5 mx-auto justify-center items-center">
          <h2 className="text-[#3B668D] font-bold text-4xl md:text-7xl leading-[80.28px] md:mb-8 mb-4">Drop us a line</h2>
          <p className="text-[#79788F] md:text-3xl text-xl md:mb-20 mb-10">Lorem ipsum dolor sit amet.</p>
          <form>
            <div className="flex items-center gap-11 mb-5">
              <label className="text-[#3B3F8D] md:block hidden font-bold text-2xl " htmlFor="email">Email</label>
              <input required id="email"
                className="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                type="email" placeholder="mail@example.com" />
            </div>
            <div className="flex items-center gap-11 mb-5">
              <label className="text-[#3B3F8D] md:block hidden font-bold text-2xl " htmlFor="Name">Name</label>
              <input required id="Name"
                className="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                type="Name" placeholder="John Doe" />
            </div>
            <textarea required placeholder="Message"
              className="pt-9 px-12 max-w-[749px] w-full h-[273px] placeholder:text-[#ADADAD] bg-[#F3F3F3] rounded-[50px] resize-none text-[#3B3F8D] font-bold outline-none border-none mb-5"
              name="Message" id="Message"></textarea>
            <div className="md:flex items-center justify-between">
              <p className="text-[#ADADAD] font-bold text-base md:mb-0 mb-9 md:text-lg ">We do not share your personal data.</p>
              <button
                className="gradient_btn py-6 px-16 rounded-full text-white font-bold text-2xl">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
      <About />
      <Footer />
    </div>
  )
}

export default Contact