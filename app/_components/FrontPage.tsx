import Image from 'next/image';
import React from 'react';

function FrontPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Section */}
            <div className="md:w-1/2 bg-orange-500 flex items-end justify-start p-12 order-2 md:order-1">
                <div className="text-left">
                    <h1 className="text-white text-2xl">CONTACT <span className='font-bold'>US :</span></h1>
                    <ul className="mt-6 space-y-2 text-sm">
                        {/* Contact Information */}
                        <li>
                            <a className="flex items-center gap-1.5" href="#">
                                <svg className="h-5 w-5 text-white" /* SVG Code */ />
                                <span className="text-white">info@fluxlogistix.com</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-1.5" href="#">
                                <svg className="h-5 w-5 text-white" /* SVG Code */ />
                                <span className="text-white">+2349061985055</span>
                            </a>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <svg className="h-5 w-5 text-white" /* SVG Code */ />
                            <address className="-mt-0.5 text-white">
                                1-3 ACME Road, off Agidingbi, Ikeja Lagos Nigeria
                            </address>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <svg className="h-5 w-5 text-white" /* SVG Code */ />
                            <address className="-mt-0.5 text-white">
                                www.fluxlogistix.com
                            </address>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 bg-white flex items-start justify-center h-screen relative order-1 md:order-2">
                {/* Logo */}
                <div className="absolute -left-9 -top-2 md:top-8 z-10 3xl:left-10">
                    <Image
                        src='/images/PHOTO-2024-09-15-17-02-27-removebg-preview.png'
                        width={220}
                        height={80}
                        alt='logo'
                    />
                </div>
                
                {/* Logistics Image with Black Overlay */}
                <div className="h-[61%] w-full relative  overflow-hidden">
                    <Image
                        src='/images/logistics.jpg'
                        layout="fill"
                        objectFit="cover"
                        alt='logistics image'
                        className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black opacity-30" />
                </div>

                {/* Slanted Background */}
                <div className="absolute bottom-16 left-48 md:bottom-24 md:left-28 md:h-60 lg:bottom-20 lg:h-80 lg:left-40 xl:left-52 xl:h-80 xl:bottom-16 3xl:left-72 transform -rotate-3 -translate-x-1/2 h-80 w-full bg-orange-500 z-5 hidden md:block" />
                
                {/* Text Section */}
                <div className="absolute bottom-16 md:bottom-36 left-14 lg:left-12 lg:bottom-44 2x1:left-72 z-10 xl:bottom-40">
                    <p className="bg-blue-950 text-orange-400 md:text-white  font-bold tracking-widest inline-block -p-1 px-6">
                        2&nbsp;0&nbsp;2&nbsp;4
                    </p>
                    <p className="md:text-white text-2xl lg:text-4xl mt-2 md:text-2xl ">COMPANY</p>
                    <p className="md:text-white text-2xl font-bold lg:text-4xl md:text-2xl">PROFILE</p>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
