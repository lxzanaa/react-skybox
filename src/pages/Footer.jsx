import React from 'react';
import footerImage from '../assets/img/footer/footer.png';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className="pt-[448px] pb-14 bg-cover" style={{ backgroundImage: `url(${footerImage})` }}>
            <div className="max-w-[1240px] px-5 mx-auto flex justify-between items-center pb-20 border-b mb-16">
                <div className="md:block hidden">
                    <h3 className="text-white font-bold text-5xl leading-[53.52px] mb-16">About us</h3>
                    <p className="text-[#FFFFFF] text-xl max-w-[418px]">
                        When using the SKYBOX Services You may transmit, store and or share certain data, information, files, etc. (altogether “Service Data”). For the avoidance of doubt, You retain full ownership of Your Service Data. SKYBOX doea that You or any other uss while using the Service. SKYBOX agrees that these Terms do not grant
                    </p>
                </div>
                <div className="md:block hidden">
                    <h3 className="text-white font-bold text-5xl leading-[53.52px] mb-16">Featured links</h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-white text-xl hover:underline transition-all" to="/Tarif">Pricing</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="/Contact">Contact</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="/Faq">FAQ</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="/Text">About</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="/Profile">Profile</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="*">Terms of Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-5xl leading-[53.52px] mb-16">Contact us</h3>
                    <ul className="flex flex-col gap-4">
                        <li><Link className="text-white text-xl hover:underline transition-all" to="*">Our office:</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="*">Digitalgoals LTD</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="*">Lapathou, 6, Strovolos 2027,</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="*">Lefkosia, Cyprus</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="tel: +37 06 225 29">Phone: +37 06 225 29 36</Link></li>
                        <li><Link className="text-white text-xl hover:underline transition-all" to="mailto: mail@example.com">Email: mail@example.com</Link></li>
                    </ul>
                </div>
            </div>
            <p className="text-white font-bold text-xl md:text-2xl text-center px-5">
                Copyright © 2016 - 2021 - SkyBox - Online File Storage
            </p>
        </footer>
    );
}

export default Footer;