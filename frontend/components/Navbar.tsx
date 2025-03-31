'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site Title */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-blue-600">
                🐱 CatAuction
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/user-center"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              User Center
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
