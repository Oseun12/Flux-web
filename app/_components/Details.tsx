import Image from 'next/image'
import React from 'react'

function Details() {
  return (
    <section className='bg-orange-50'>
  <div className="mx-auto max-w-screen-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl text-center ">
        Why Choose Us
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-24">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <Image
          alt="logistics"
          src="https://res.cloudinary.com/dpkl4o58w/image/upload/v1726500708/logis_bitjqm.avif"
          width={200}
          height={100}
          className="absolute inset-0 h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="lg:py-16">
        <ul className="space-y-4 text-gray-600">
          <li>
            <div className='flex items-center gap-6'>
                <Image 
                    src='/images/solution.png'
                    width={100}
                    height={100}
                    alt='solution icon'/>
                <h2 className='font-bold text-lg'>CUSTOMIZED SOLUTIONS</h2>
                <p></p>
            </div>
          </li>

          <li>
            <div className='flex items-center gap-6'>
                <Image 
                    src='/images/tech2.png'
                    width={100}
                    height={100}
                    alt='technology icon'/>
                <h2 className='font-bold text-lg'>ADVANCED TECHNOLOGY</h2>
                <p></p>
            </div>
          </li>

          <li>
            <div className='flex items-center gap-6'>
                <Image 
                    src='/images/team.png'
                    width={100}
                    height={100}
                    alt='solution icon'/>
                <h2 className='font-bold text-lg'>EXPERT TEAM</h2>
                <p></p>
            </div>
          </li>

          <li>
            <div className='flex items-center gap-6'>
                <Image 
                    src='/images/reliability.jpg'
                    width={100}
                    height={100}
                    alt='solution icon'/>
                <h2 className='font-bold text-lg'>RELIABILITY</h2>
                <p></p>
            </div>
          </li>

          
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Details