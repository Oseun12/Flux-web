'use client'
import Link from 'next/link'
import React from 'react'

function ContactPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-w p-8 rounded-lg  ">
        
        {/* Left side: Information Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl mb-16 font-bold text-gray-800">
            Do You Have A Question For Us?
          </h1>
          <p className="text-gray-600">
            Do you need any Clarification?
          </p>
          <p className="text-gray-600">
            Are you worried about any thing <span className='text-3xl font-bold'>?</span>
          </p>
          <p className="text-gray-600">Access hours: Monday - Sunday: 8am - 8pm</p>
          
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-orange-500">Contact Us</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="mailto:info@fluxlogistics.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-orange-500"
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

                  <span className="flex-1 text-orange-500">info@fluxlogistics.com</span>
                </Link>
              </li>

              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="+2349061985055"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-orange-500"
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

                  <span className="flex-1 text-orange-500">+2349061985055</span>
                </Link>
              </li>

              <li
                className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-orange-500"
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

                <address className="-mt-0.5 flex-1 not-italic text-orange-500">
                  1-3 ACME Road, off Agidingbi, Ikeja Lagos Nigeria
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-20">
          <h2 className="text-3xl font-bold mb-6 ">Contact Form</h2>
          <form action="#" className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300 bg-white"
                placeholder="Enter first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full mt-1 py-2 px-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Enter last name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 py-2 px-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Enter email"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full mt-1 py-2 px-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Enter phone number"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full mt-1 py-2 px-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                placeholder="Write your message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-200"
            >
              Send your message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
