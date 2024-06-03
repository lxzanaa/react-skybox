import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import bg from '../assets/img/premium/bg.png'

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };
    return (
        <div>
            <Header />
            <section className="pt-20 md:pb-60 relative">
                <img className="absolute md:block hidden left-0 top-0" src={bg} alt="" />
                <div className="max-w-[1199px] w-full px-5 mx-auto">
                    <h2 className="md:spacing_title text-[#3B668D] font-black text-5xl md:text-7xl leading-[84.38px] tracking-widest uppercase text-center mb-6">FAQ</h2>
                    <p className="md:spacing_2 spacing_title text-[#79788F] text-xl md:text-[30px] leading-9 text-center md:mb-[100px] mb-10 uppercase">Online storage</p>
                    <div className="max-w-[1199px] mx-auto flex flex-col gap-3">
                        {[...Array(6)].map((_, index) => (
                            <div className="question overflow-hidden transition-all" key={index}>
                                <div className={`open_toggle faq-gradient rounded-xl py-7 px-10 flex items-center justify-between cursor-pointer ${openIndex === index ? 'faq-gradient_2' : ''}`} onClick={() => toggleQuestion(index)}>
                                    <h3 className="text-[#46637E] font-bold md:text-3xl text-xl">How to install?</h3>
                                    <button className="toggle_button">
                                        {openIndex === index ? (
                                            <svg width="36" height="4" viewBox="0 0 36 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2H34" stroke="#787878" strokeWidth="3" strokeLinecap="round" />
                                            </svg>
                                        ) : (
                                            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.90723 18H32.3822" stroke="#787878" strokeWidth="3" strokeLinecap="round" />
                                                <path d="M17.1445 2L17.1445 33" stroke="#787878" strokeWidth="3" strokeLinecap="round" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className={`toggle_text overflow-hidden md:px-14 px-4 ${openIndex === index ? 'max-h-full' : 'max-h-0'} transition-max-height transition-all`}>
                                    <p className="text-[#878787] md:py-8 py-4 md:text-xl text-base  ">Orci nibh faucibus nunc aliquet diam. Neque quis dignissim ipsum eget sed massa feugiat sit
                                        nibh. Pretium eget morbi tincidunt justo, mattis tincidunt facilisis lorem. Commodo, sit
                                        enim, amet fringilla in proin purus. Et odio arcu libero at sed quam tempor, neque.
                                        Scelerisque arcu vel vehicula eget posuere. Sed urna velit aliquam in pharetra. Tempus
                                        libero elit ac hac et morbi. Sed viverra vel adipiscing mauris, congue tincidunt integer.
                                        Sed gravida in cursus pellentesque odio.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <About />
            <Footer />
        </div>
    )
}

export default Faq