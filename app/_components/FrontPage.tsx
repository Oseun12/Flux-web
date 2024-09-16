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
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-white">info@fluxlogistix.com</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-1.5" href="#">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-white">+2349061985055</span>
                            </a>
                        </li>
                        <li className="flex items-start gap-1.5">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <address className="-mt-0.5 text-white">
                                1-3 ACME Road, off Agidingbi, Ikeja Lagos Nigeria
                            </address>
                        </li>
                        <li className="flex items-start gap-1.5">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v3m0 12v3m7.071-12.071a9 9 0 00-12.142 0M4.929 19.071a9 9 0 0012.142 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
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
                 <div className="
                   absolute 
                    bottom-16 left-48 
                    md:bottom-24 md:left-28 md:h-60 
                    lg:bottom-28 lg:h-72 lg:left-40 
                    xl:left-52 xl:h-80 xl:bottom-16 
                    2xl:left-64 2xl:h-96 2xl:bottom-12 
                    3xl:left-72 
                    transform -rotate-3 -translate-x-1/2 
                    h-80 w-full bg-orange-500 z-5 
                    hidden md:block" />
                
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


//   <div className="absolute bottom-16 left-48 md:bottom-24 md:left-28 md:h-60 lg:bottom-28 lg:h-72 lg:left-40 xl:left-52 xl:h-80 xl:bottom-16 3xl:left-72 transform -rotate-3 -translate-x-1/2 h-80 w-full bg-orange-500 z-5 hidden md:block" />
