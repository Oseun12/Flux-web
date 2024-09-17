import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog() {
  return (
    <div className='p-6 mt-20 mx-auto max-w-screen-lg ' id='Blogs'>
      <h2 className='text-center mb-20 font-bold text-4xl'>OUR BLOGS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <Link
          href="https://medium.com/flux-self-storage/6-key-benefits-of-using-a-self-storage-facility-for-your-e-commerce-business-681ff8888481"
          className="relative block border shadow-lg p-4 rounded-xl">
          <div className="relative h-[350px] sm:h-[250px]">
            <Image
              src="/images/blog5.webp"
              layout="fill"
              objectFit="cover"
              alt="self-storage"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36"></h3>
          </div>
          <div>
            <h4 className="font-bold">
              6 Key Benefits of using a Self-Storage Facility for your E-commerce Business
            </h4>
            <p className='text-xs mt-1'>
              Before looking into the benefits of a self-storage unit for your e-commerce/online business, you probably searched for “self-storage facility in Nigeria” or maybe saw our ad and got curious about how it could help your business.
            </p>
            <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Find out more
              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </Link>
          </div>
        </Link>

        <Link
          href="https://medium.com/flux-self-storage/choosing-the-right-storage-units-what-you-need-to-know-cb05827bc834"
          className="relative block border shadow-lg p-4 rounded-xl">
          <div className="relative h-[350px] sm:h-[250px]">
            <Image
              src="/images/blog4.webp"
              layout="fill"
              objectFit="cover"
              alt="self-storage"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-36"></h3>
          </div>
          <div>
            <h4 className="font-bold">
              Choosing the Right Storage Units: What You Need to Know
            </h4>
            <p className='text-xs mt-1'>
              What to look out for when choosing the right storage units? This is a great question! Lots of people jump right into renting a self storage unit without any proper planning. But you are on the right track by asking questions first.
            </p>
            <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Find out more
              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                &rarr;
              </span>
            </Link>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog
