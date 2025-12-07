"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ['Home', 'About', 'Quotes', 'Tips', 'News', 'Back Office'];

  return (
    <>
      <Link href="/" className="fixed top-6 left-6 z-50 transition-transform hover:scale-105 hidden lg:block">
        <Image
          src="/images/Logo with Words.svg"
          alt="Foulds Health Insurance Logo"
          width={150}
          height={50}
          className="h-10 w-auto bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-sm"
          priority
        />
      </Link>

      <Link href="/" className="fixed top-6 left-6 z-50 transition-transform hover:scale-105 lg:hidden">
        <Image
          src="/images/Logo.svg"
          alt="Foulds Health Insurance Logo"
          width={50}
          height={50}
          className="h-10 w-auto bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-sm"
          priority
        />
      </Link>

      <div className="sticky top-4 z-50 flex justify-center px-4 mb-8">
        <nav className="glass rounded-full px-6 py-3 shadow-lg flex items-center justify-center gap-6 w-full max-w-fit transition-all duration-300 hover:shadow-xl relative">

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 text-[#005d9a] font-medium rounded-full hover:bg-blue-50/50 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="flare-button bg-[#005d9a] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#1e9cd7] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#005d9a] p-2 rounded-full hover:bg-blue-50/50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile/Tablet Dropdown */}
          <div
            className={`absolute top-full left-0 right-0 mt-4 p-4 glass rounded-3xl shadow-2xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible"
              }`}
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-3 text-[#005d9a] font-medium rounded-xl hover:bg-blue-50/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="h-px bg-gray-200 my-2" />
              <Link
                href="/contact"
                className="flare-button px-4 py-3 text-center bg-[#005d9a] text-white font-bold rounded-xl hover:bg-[#1e9cd7] transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
