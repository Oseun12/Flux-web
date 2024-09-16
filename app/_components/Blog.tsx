import Image from 'next/image'
import React from 'react'

function Blog() {
  return (
    <div className='p-6'>
        <h2 className='text-center mb-20 font-bold text-4xl'>OUR BLOGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
            <a href="#" className="relative block border shadow-lg p-4 rounded-xl  ">
                <div className="relative h-[350px] sm:h-[250px] ">
                <Image
                src="/images/blog.jpg"
                layout="fill"
                objectFit="cover"
                alt="self-storage"
                className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-36 "></h3>
                
                </div>
                <div className=''>
                <h4 className=" font-bold ">
                The Future of Logistics: How AI and Automation are Revolutionizing Supply Chains
                </h4>
                <p className='text-xs mt-1'>
                Explore the role of emerging technologies such as artificial intelligence, machine learning, and robotics in streamlining logistics operations, improving efficiency, and reducing costs.
                </p>

                
                </div>
            </a>

            <a href="#" className="relative block border shadow-lg p-4 rounded-xl  ">
                <div className="relative h-[350px] sm:h-[250px] ">
                <Image
                src="/images/blog2.webp"
                layout="fill"
                objectFit="cover"
                alt="self-storage"
                className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-36 "></h3>
                
                </div>
                <div className=''>
                <h4 className=" font-bold ">
                Sustainable Logistics: Green Practices for a More Eco-Friendly Supply Chain
                </h4>
                <p className='text-xs mt-1'>
                Discuss how logistics companies can adopt sustainable practices, from reducing carbon footprints in transportation to using eco-friendly packaging and optimizing routes for energy efficiency.                
                </p>

                </div>
            </a>

            <a href="#" className="relative block border shadow-lg p-4 rounded-xl  ">
                <div className="relative h-[350px] sm:h-[250px] ">
                <Image
                src="/images/blog3.jpeg"
                layout="fill"
                objectFit="cover"
                alt="self-storage"
                className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black opacity-30" />
                </div>

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-36 "></h3>
                
                </div>
                <div className=''>
                <h4 className=" font-bold ">
                The Importance of Last-Mile Delivery in Customer Satisfaction and E-Commerce                </h4>
                <p className='text-xs mt-1'>
                Highlight the challenges and innovations in last-mile delivery, including same-day shipping, drones, and customer experience management, and explain why it's critical in today’s e-commerce-driven world.                </p>

                </div>
            </a>
        </div>
    </div>
  )
}

export default Blog