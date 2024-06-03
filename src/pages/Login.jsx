import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import bg from '../assets/img/premium/bg.png'

function Login() {
  return (
    <div>
      <Header />
      <section class="pt-20 md:pb-96 pb-20 relative">
        <img class="md:block hidden absolute left-0 top-0" src={bg} alt=""/>
          <div class="max-w-[1240px] px-5 mx-auto">
            <h2
              class="md:spacing_2 text-[#3B668D] font-black text-5xl md:text-7xl leading-[84.38px] tracking-widest uppercase text-center mb-6">
              Login</h2>
            <p class="md:spacing_2 spacing_title text-[#3B668D] text-xl md:text-[30px] leading-9 text-center mb-[100px] uppercase">Online storage
            </p>
            <div class="max-w-[850px] mx-auto justify-center">
              <form>
                <div class="flex items-center gap-11 mb-5 max-w-[850px] justify-end">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl " for="email">Email</label>
                  <input required id="email"
                    class="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="email" placeholder="mail@example.com"/>
                </div>
                <div class="flex items-center gap-11 mb-11 max-w-[850px] justify-end">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl " for="password">Password</label>
                  <input required id="password"
                    class="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="password" placeholder="maomail@example.com"/>
                </div>
                <div class="flex flex-col text-center">
                  <button
                    class="gradient_btn inline-flex mx-auto max-w-[350px] justify-center rounded-full text-white font-bold text-2xl py-6 px-[123px] mb-9">Login</button>
                  <a class="text-[#ADADAD] font-bold text-lg" href="#">Forget Password</a>
                </div>
              </form>
            </div>
          </div>
      </section>
      <About />
      <Footer />
    </div>
  )
}

export default Login