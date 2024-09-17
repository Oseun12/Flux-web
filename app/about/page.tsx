import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='bg-orange-50'>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726566767/fluxenv_fnwwup.jpg"
                width={800}
                height={100}
                className="absolute inset-0 h-full w-full object-cover mt-20 rounded-2xl"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl font-serif"> LET US TELL YOU ABOUT 
                <span className='text-6xl font-light bg-orange-800 text-white px-2 inline-block transform -rotate-3'>FLUX </span>
              </h2>

              <p className="mt-4 text-gray-600 mb-10 font-thin">
              We are the largest self storage facility in West Africa, located in Lagos, Nigeria. We are not just big; we are the best! We offer secure, affordable, and spacious storage solutions for all your storage needs.
              </p>

              <p className=' text-gray-600 font-thin'>
              Take advantage of our 200 individual self-locking compartments, offering the best amenities, space, and facilities to store your items. Our storage units are affordable, spacious, well-ventilated, and kept neat & dry at all times.
              </p>

              
            </div>
          </div>

          <div className='flex mt-20 gap-10'>
            <div className='w-1/2 border shadow-xl p-4 px-4 shadow-orange-500 rounded-2xl transition-all ease-in-out hover:scale-105 '>
              <h2 className='text-3xl font-bold mb-6'>OUR MISSION</h2>
              <p className='font-thin'>
              Our mission is to provide affordable, secure, and convenient storage solutions to individuals and businesses in Nigeria and Africa as a whole..
              </p>
            </div>

            <div className='w-1/2 border shadow-xl p-4 px-4 shadow-orange-500 rounded-2xl transition-all ease-in-out hover:scale-105'>
              <h2 className='text-3xl font-bold mb-6' >OUR VISION</h2>
              <p className='font-thin'>
              We envision becoming the go-to destination for all storage needs in West Africa, setting the standard for excellence in the industry.
              </p>
            </div>
          </div>

          {/* The leaders */}
          <div className='mt-20'>
            <h2 className='text-center font-bold text-4xl mb-10'>THE LEADERSHIP TEAM OF FLUX</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
              <div className="mb-10">
                <Image
                  alt="Managing Director"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562843/managing-director_cc8rae.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Philip Wetherall</h2>
                <h2 className="text-lg font-thin mt-4 ">Managing Director</h2>
              </div>
              
              <div className="mb-10 ">
                <Image
                  alt="Team Leader"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562385/deputy-managing_director_qmeanz.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Olugbenga Owolabi</h2>
                <h2 className="text-lg font-thin mt-4">Deputy Managing Director</h2>
              </div>

              <div className="mb-10">
                <Image
                  alt="Team Leader"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562397/ED-Operations_and_business_scownk.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Gbenga Ojo</h2>
                <h2 className="text-lg font-thin mt-4">ED, Operations & Business</h2>
              </div>

              <div className="mb-10">
                <Image
                  alt="Team Leader"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562412/Group_CFP_lpppmg.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Olalekan Bankole</h2>
                <h2 className="text-lg font-thin mt-4">Group CFO</h2>
              </div>

              <div className="mb-10">
                <Image
                  alt="Team Leader"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562423/Warehousing_manager_brlqqa.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Chiwendu Nwosu</h2>
                <h2 className="text-lg font-thin mt-4">Warehousing & Ops. Manager</h2>
              </div>
              
              <div className="mb-10">
                <Image
                  alt="Team Leader"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562375/business_development_llbhaa.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Patrick Iyoha</h2>
                <h2 className="text-lg font-thin mt-4">Business Development Manager</h2>
              </div>

              <div className="mb-10">
                <Image
                  alt="Team Leader"
                  src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726562412/HR_whwhn8.jpg"
                  width={500}
                  height={250}
                  className="rounded-2xl object-cover  shadow-xl p-4  shadow-blue-200 transition-all ease-in-out hover:scale-105"
                />
                <h2 className="text-xl font-bold mt-4 ">Omolara Oyewo</h2>
                <h2 className="text-lg font-thin mt-4">HR/Admin Manager</h2>
              </div>


            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default page