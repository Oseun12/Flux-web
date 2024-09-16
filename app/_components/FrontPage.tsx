import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function FrontPage() {
    return (
        <div className="h-screen w-screen overflow-hidden">
            {/* Right Section */}
            <div className="flex items-center justify-center h-screen relative">
            

                {/* Carousel */}
                <div className="carousel w-full h-screen relative">
                    <div id="slide1" className="carousel-item relative w-full h-full">
                        <Image
                            src='/images/logistics.jpg'
                            layout="fill"
                            objectFit="cover"
                            alt='logistics image'
                            className="absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-black opacity-30" />

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-full">
                        <Image
                            src='/images/logistics7.jpg'
                            layout="fill"
                            objectFit="cover"
                            alt='logistics image'
                            className="absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-black opacity-30" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-full">
                        <Image
                            src='/images/logistics2.avif'
                            layout="fill"
                            objectFit="cover"
                            alt='logistics image'
                            className="absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-black opacity-30" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-full">
                        <Image
                            src='/images/logistics4.avif'
                            layout="fill"
                            objectFit="cover"
                            alt='logistics image'
                            className="absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-black opacity-30" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="absolute flex flex-col items-center justify-center  px-10 ">
                    
                    <p className="text-white text-2xl lg:text-6xl font-bold mt-2 text-center tracking-widest">FLUX LOGISTICS.</p>
                    <p className="text-white mt-4  text-2xl text-center">Your trusted and reliable logistics company</p>
                    <p className='text-white mt-6 text-center text-lg'>We delivery worldwide</p>
                    <Button className='text-center mt-6 p-6  bg-orange-500 text-lg'>Learn more</Button>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
