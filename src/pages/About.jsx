import React from 'react'
import left from '../assets/img/premium/left.png'
import right from '../assets/img/premium/right.png'
import download from '../assets/img/premium/download.svg'
import user from '../assets/img/premium/user.svg'

function About() {
    return (
        <section className="md:pt-48 pt-[138px] md:pb-60 pb-10 relative">
            <img className="absolute lg:block hidden left-0 bottom-36" src={left} />
            <img className="absolute lg:block hidden right-0 bottom-36" src={right} />
            <div className="max-w-[1240px] px-5 mx-auto md:flex items-center gap-20 justify-center">
                <div className="md:flex text-center items-center gap-8 md:mb-0 mb-16">
                    <img className="flex text-center md:mb-0 mb-4 mx-auto w-20 h-28" src={download} alt="download" />
                    <div>
                        <h3 className="text-[#425B8C] font-bold md:text-[42px] text-4xl leading-10 md:mb-4 mb-2">999529 000 000</h3>
                        <p className="text-[#718DC2] font-bold text-xl md:text-2xl leading-7 ">Загружено файлов на сервис</p>
                    </div>
                </div>

                <div className="md:flex text-center items-center gap-8">
                    <img className="flex text-center md:mb-0 mb-4 mx-auto w-[74px] h-[74px]" src={user} alt="user" />
                    <div>
                        <h3 className="text-[#425B8C] font-bold md:text-[42px] text-4xl leading-10 md:mb-4 mb-2">235 764 784</h3>
                        <p className="text-[#718DC2] font-bold text-xl md:text-2xl leading-7 ">Зарегистрировано пользователей</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About