import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import PremiumBG from '../assets/img/premium/bg.png'
import Pre1 from '../assets/img/premium/1.png'
import Pre2 from '../assets/img/premium/2.png'
import Pre3 from '../assets/img/premium/3.png'


function Tarif() {
  return (
    <>
      <Header />
      <section className="py-20 relative">
        <img className="absolute left-0 top-[350px]" src={PremiumBG} alt="" />
        <div className="max-w-[1600px] w-full mx-auto">
          <h2 className="text-[#3B668D] font-light text-5xl md:text-7xl leading-[84.38px] tracking-widest uppercase text-center md:mb-6 mb-4">Become
            a PREMIUM MEMBER</h2>
          <p className="text-[#79788F] text-[30px] leading-9 text-center mb-[100px]">Premium Business <br
            className="md:block hidden" />
            1 TB free space and 4 TB monthly transfer</p>

          <div className="flex justify-between items-center gap-10">
            <div className="pt-[100px] lg:block hidden text-center pb-[72px] px-[61px]  relative rounded-xl">
              <img className="absolute top-0 left-0 rounded-s-xl" src={Pre1} />
              <h3 className="text-[#3B668D] font-bold text-5xl leading-[53.52px] mb-9">30 days</h3>
              <p className="text-[#8572FF] text-[64px] leading-[71.36px] pb-28 border-b mb-[76px]">$20.99</p>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">1 Tb Free space <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">4 Tb Monthly space <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">100 Mbit Speed <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">3000 sessions <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
              </ul>
            </div>

            <div className="md:max-w-[520px] w-full md:pt-[89px] bg-white justify-center pt-24 px-10 card_shadow text-center pb-10 md:px-[100px] relative rounded-xl">
              <img className="absolute top-0 left-0 rounded-s-xl" src={Pre2} />
              <p className="text-[#40BF3D] text-lg mb-2">Most popular</p>
              <h3 className="text-[#3B668D] font-bold text-5xl leading-[53.52px] mb-9">90 days</h3>
              <p className="text-[#8572FF] text-[64px] leading-[71.36px] pb-28 border-b mb-[76px]">$46.99</p>
              <ul className="flex flex-col gap-5 mb-28">
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">1 Tb Free space <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">4 Tb Monthly space <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">100 Mbit Speed <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">3000 sessions <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
              </ul>
              <a className="gradient_btn text-white mb-12 font-bold text-2xl py-4 md:py-6 px-10 md:px-[100px] inline-flex rounded-full"
                href="register.html">Sign Up</a>
              <p className="text-[#567796] text-base md:text-lg">14-day money back guarantee</p>
            </div>

            <div className="pt-[100px] lg:block hidden text-center pb-[72px] px-[61px]  relative rounded-xl">
              <img className="absolute top-0 right-0 rounded-s-xl rounded-e-xl" src={Pre3} />
              <h3 className="text-[#3B668D] font-bold text-5xl leading-[53.52px] mb-9">365 days</h3>
              <p className="text-[#8572FF] text-[64px] leading-[71.36px] pb-28 border-b mb-[76px]">$127.99</p>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">1 Tb Free space <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">4 Tb Monthly space <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">100 Mbit Speed <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
                <li className="flex items-center gap-10 justify-between text-[#567796] text-xl">3000 sessions <span><svg
                  width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.47754 10.5004L10.3673 19.0005L22.4775 2.00049" stroke="#32C52F" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </>
  )
}

export default Tarif