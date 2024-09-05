import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="max-w-screen  py-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <div className="mx-auto w-44 h-44">
            <img
              src="/images/logos/logoIcon.svg"
              className="w-full h-full object-contain"
              alt="icon"
            />
          </div>
        </div>
        <div>
          <h6 className="text-lg mb-4">Quick Links</h6>
          <Link href="/about" className="block text-gray-800 mb-2 hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="block text-gray-800 mb-2 hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="block text-gray-800 mb-2 hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div>
          <h6 className="text-lg mb-4">Follow Us</h6>
          <Link
            href="https://facebook.com"
            className="block text-gray-800 mb-2 hover:underline"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            href="https://twitter.com"
            className="block text-gray-800 mb-2 hover:underline"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com"
            className="block text-gray-800 mb-2 hover:underline"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="text-center mt-2 ">
        <p className='mb-2 text-gray-600'> Designed & Developed by KaryMitra</p>

        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} KaryMitra. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
