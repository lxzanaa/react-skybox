import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import bg from '../assets/img/premium/bg.png'

function Text() {
  return (
    <div>
      <Header />
      <section class="pt-20 md:pb-28 relative">
        <img class="absolute md:block hidden left-0 top-0" src="./img/premium/bg.png" alt=""/>
          <div class="max-w-[1240px] px-5 mx-auto">
            <h2
              class="md:spacing_2 text-[#3B668D] font-black text-5xl md:text-7xl leading-[84.38px]  uppercase text-center mb-6">
              Text Page</h2>
            <p class="md:spacing_2 spacing_title text-[#79788F] text-xl md:text-[30px] leading-9 text-center mb-[100px] uppercase">Online storage
            </p>
            <div>
              <div class="mb-11" >
                <h3 class="text-[#3B668D] text-4xl leading-[60px] mb-1" >Access from anywhere</h3>
                <p class="text-[#2B4964] md:text-lg text-base " >Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p> <br/>
                  <p class="text-[#2B4964] md:text-lg text-base " >Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p>
              </div>
              <div class="grid grid-cols-2 gap-6" >
                <h3 class="text-[#3B668D] text-4xl leading-[60px] mb-1 col-span-2" >Access from anywhere</h3>
                <p class="col-span-2 md:text-lg text-base" >Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p>
                <p class="md:text-lg text-base" >Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p>
                <p class="md:text-lg text-base" >Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p>
                <p class="col-span-2 md:text-lg text-base" >Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web. Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p>
              </div>
            </div>
          </div>
      </section>
      <About />
      <Footer />
    </div>
  )
}

export default Text