import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import capcha from '../assets/img/register/image.png'
import bg from '../assets/img/premium/bg.png'

function Register() {
  return (
    <div>
      <Header />
      <section class="pt-20 md:pb-60 relative">
        <img class="absolute md:block hidden left-0 top-0" src={bg} alt=""/>
          <div class="max-w-[1240px] px-5 mx-auto">
            <h2
              class="md:spacing_2 text-[#3B668D] font-black text-5xl md:text-7xl leading-[84.38px] uppercase text-center mb-6">
              REgister</h2>
            <p
              class="md:spacing_2 spacing_title text-[#79788F] text-xl md:text-[30px] leading-9 text-center md:mb-[100px] mb-9 uppercase">
              Online storage
            </p>
            <div class="max-w-[850px] mx-auto justify-center text-right">
              <form>
                <div class="flex items-center gap-11 mb-5 max-w-[850px]  justify-end text-right">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl " for="email">Email</label>
                  <input required id="email"
                    class="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="email" placeholder="mail@example.com"/>
                </div>
                <div class="flex items-center gap-11 mb-5 max-w-[850px] justify-end text-right">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl " for="re-email">Re -
                    Email</label>
                  <input required id="re-email"
                    class="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="email" placeholder="maomail@example.com"/>
                </div>
                <div class="flex items-center gap-11 mb-5 max-w-[850px] justify-end">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl "
                    for="Password">Password</label>
                  <input required id="Password"
                    class="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="Password" placeholder="***********"/>
                </div>
                <div class="flex items-center gap-11 mb-5 max-w-[850px] justify-end">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl " for="re-password">Re -
                    Passwoed</label>
                  <input required id="re-password"
                    class="max-w-[630px] placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="password" placeholder="***********"/>
                </div>

                <div class="md:flex items-center gap-11 mb-[71px] max-w-[850px] justify-end">
                  <label class="text-[#3B3F8D] md:block hidden font-bold text-2xl " for="Captcha">Captcha</label>
                  <div class="flex items-center gap-9 mb-10" >
                    <refresh class="cursor-pointer md:hidden block" onclick="refreshCaptcha()">
                      <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.8509 18.5119C40.7148 17.6587 39.9127 17.0774 39.0595 17.2135C38.2063 17.3497 37.625 18.1517 37.7611 19.005C37.7626 19.0143 37.7642 19.0236 37.7658 19.0328C39.359 28.4113 33.0478 37.3054 23.6694 38.8985C14.2909 40.4917 5.39678 34.1805 3.80363 24.8021C2.21048 15.4237 8.52176 6.52954 17.9001 4.93638C23.6676 3.95666 29.5382 5.97129 33.4887 10.2861L26.5583 12.5951C25.7384 12.8679 25.295 13.7536 25.5678 14.5735C25.5678 14.5737 25.5679 14.5739 25.568 14.5741C25.8408 15.394 26.7265 15.8374 27.5464 15.5647C27.5466 15.5646 27.5468 15.5645 27.547 15.5645L36.9336 12.4357C37.5727 12.2228 38.0038 11.6247 38.0037 10.951V1.56446C38.0037 0.700418 37.3033 0 36.4392 0C35.5752 0 34.8748 0.700418 34.8748 1.56446V7.27927C26.8181 -0.383621 14.0748 -0.064349 6.41189 7.99234C-1.25101 16.049 -0.931828 28.7923 7.12496 36.4553C15.1817 44.1183 27.9249 43.799 35.5879 35.7422C39.9575 31.1479 41.9076 24.7637 40.8509 18.5119Z"
                          fill="#ADADAD" />
                      </svg>
                    </refresh>
                    <div class="max-w-[260px]">
                      <img src={capcha} id="captchaImg"/>
                    </div>
                  </div>
                  <refresh class="cursor-pointer md:block hidden" onclick="refreshCaptcha()">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M40.8509 18.5119C40.7148 17.6587 39.9127 17.0774 39.0595 17.2135C38.2063 17.3497 37.625 18.1517 37.7611 19.005C37.7626 19.0143 37.7642 19.0236 37.7658 19.0328C39.359 28.4113 33.0478 37.3054 23.6694 38.8985C14.2909 40.4917 5.39678 34.1805 3.80363 24.8021C2.21048 15.4237 8.52176 6.52954 17.9001 4.93638C23.6676 3.95666 29.5382 5.97129 33.4887 10.2861L26.5583 12.5951C25.7384 12.8679 25.295 13.7536 25.5678 14.5735C25.5678 14.5737 25.5679 14.5739 25.568 14.5741C25.8408 15.394 26.7265 15.8374 27.5464 15.5647C27.5466 15.5646 27.5468 15.5645 27.547 15.5645L36.9336 12.4357C37.5727 12.2228 38.0038 11.6247 38.0037 10.951V1.56446C38.0037 0.700418 37.3033 0 36.4392 0C35.5752 0 34.8748 0.700418 34.8748 1.56446V7.27927C26.8181 -0.383621 14.0748 -0.064349 6.41189 7.99234C-1.25101 16.049 -0.931828 28.7923 7.12496 36.4553C15.1817 44.1183 27.9249 43.799 35.5879 35.7422C39.9575 31.1479 41.9076 24.7637 40.8509 18.5119Z"
                        fill="#ADADAD" />
                    </svg>
                  </refresh>
                  <input required id="Captcha"
                    class="max-w-[268px] mx-auto placeholder:text-[#ADADAD] w-full outline-none border-none bg-[#F3F3F3] py-9 px-14 rounded-full text-[#3B3F8D] font-bold"
                    type="text" placeholder="Enter Captcha"/>
                </div>

                <div class="md:flex items-center gap-14 md:justify-end text-center">
                  <div class="md:flex hidden items-center gap-2">
                    <input id="checkbox" type="checkbox"/>
                      <label for="checkbox" class="text-[#ADADAD] font-bold ">I agree with terms</label>
                  </div>
                  <button
                    class="gradient_btn rounded-full text-white font-bold md:text-2xl text-xl md:py-6 py-5 px-20 md:px-[123px] ">Register</button>
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

export default Register