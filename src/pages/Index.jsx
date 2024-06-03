import React from 'react';
import HeroImg from '../assets/img/hero/Design.png'
import Button from '../assets/img/hero/Button.png'
import svg1 from '../assets/img/second/1.svg'
import svg2 from '../assets/img/second/2.svg'
import svg3 from '../assets/img/second/3.svg'
import svg4 from '../assets/img/second/4.svg'
import secondHero from '../assets/img/second/hero.png'
import PremiumBG from '../assets/img/premium/bg.png'
import Pre1 from '../assets/img/premium/1.png'
import Pre2 from '../assets/img/premium/2.png'
import Pre3 from '../assets/img/premium/3.png'
import About from './About';



function index() {
    return (
        <>
            <section className="pt-14 pb-20">
                <div className="max-w-[1240px] px-5 mx-auto md:flex items-center relative">
                    <div>
                        <img className="md:hidden flex max-w-[815.8px] w-full mb-10" src={HeroImg}
                            alt="Hero" />
                    </div>
                    <div className="">
                        <h1 className="text-[#3B668D] font-black text-5xl md:text-7xl leading-[70px] uppercase mb-2 md:text-left text-center">Personal <br /> and
                            Business</h1>
                        <p className="lg:letter__spacing spacing__text text-[#3B668D] md:text-left text-center text-2xl uppercase md:border-b border-b-[#3B668D] lg:pb-8 mb-8 lg:mb-11">Online
                            storage</p>
                        <h3 className="text-[#3B668D] font-medium text-2xl leading-10 uppercase mb-3 md:mb-0">STORE AND MANAGE ALL YOUR Files!</h3>
                        <p className="max-w-[505px] text-[#2B4964] md:text-xl text-lg leading-7 tracking-widest md:mb-6 mb-11">Upload multiple files at once
                            and keep them forever on this site. If you're using FireFox or Chrome, you can simply drag & drop your files
                            to begin uploading</p>
                        <button className="relative">
                            <img className="w-[308px]" src={Button} alt="btn" />
                            <p className="text-white font-bold text-2xl leading-7 absolute bottom-[30px] left-[60px]">Try SkyBox Now</p>
                        </button>
                    </div>
                    <div className="md:block hidden" >
                        <img className="max-w-[815px] w-full absolute right-[-122px] bottom-[-143px]" src={HeroImg}
                            alt="Hero" />
                    </div>
                </div>
            </section>

            <section className="py-20 relative bg_image" >
                <div className=" max-w-[1240px] px-5 mx-auto md:flex ">
                    <img className="max-w-[650px] w-full  -translate-x-24 md:flex hidden" src={secondHero} alt="hero" />
                    <div className="flex flex-col gap-7">
                        <div className="flex items-start z-40">
                            <img className="md:flex hidden" src={svg1} alt="1" />
                            <div>
                                <h3 className="md:text-[#3B668D] lg:text-4xl text-2xl text-black mb-5 uppercase">SAFE AND SECURE</h3>
                                <p className="text-lg leading-7 text-[#2B4964]">Safely store and backup all your essential files. From family
                                    photos & videos to important documents, you
                                    can rely on us to store all your media securely and forever.</p>
                            </div>
                        </div>

                        <div className="flex items-start z-40">
                            <img className="md:flex hidden" src={svg2} alt="1" />
                            <div>
                                <h3 className="md:text-[#3B668D] lg:text-4xl text-2xl text-black mb-5 uppercase">Access from anywhere</h3>
                                <p className="text-lg leading-7 text-[#2B4964]">Easily access your files from anywhere with desktop apps for
                                    Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.</p>
                            </div>
                        </div>

                        <div className="flex items-start z-40">
                            <img className="md:flex hidden" src={svg3} alt="1" />
                            <div>
                                <h3 className="md:text-[#3B668D] lg:text-4xl text-2xl text-black mb-5 uppercase">STORE AND MANAGE ALL YOUR FILES!</h3>
                                <p className="text-lg leading-7 text-[#2B4964]">Upload multiple files at once and keep them forever on this site.
                                    If you're using FireFox or Chrome, you can simply drag & drop your files to begin uploading.</p>
                            </div>
                        </div>

                        <div className="flex items-start z-40">
                            <img className="md:flex hidden" src={svg4} alt="1" />
                            <div>
                                <h3 className="md:text-[#3B668D] lg:text-4xl text-2xl text-black mb-5 uppercase">Any point of the globe</h3>
                                <p className="text-lg leading-7 text-[#2B4964]">High speed from any location with internet access! Gigabit
                                    networking and high-performance server!</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

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

           <About/>
        </>
    );
}

export default index;
