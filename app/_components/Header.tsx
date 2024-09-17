import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 p-4">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-orange-600" href="#">
          <span className="sr-only">Home</span>
          <Image
            src='/images/PHOTO-2024-09-15-17-02-27-removebg-preview.png'
            width={220}
            height={80}
            alt='logo'
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/">Home</Link>
              </li>

              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/about">About Us</Link>
              </li>

              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="services">Services</Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" href="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="/contacts"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
