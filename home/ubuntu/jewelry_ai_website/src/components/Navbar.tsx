"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path ? "nav-link-active" : "nav-link";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-700">Jewelry AI Research</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg 
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg 
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <div className="md:ml-6 md:flex md:space-x-2">
              <Link href="/" className={isActive("/")}>
                Overview
              </Link>
              <Link href="/solutions" className={isActive("/solutions")}>
                AI Solutions
              </Link>
              <Link href="/deployment" className={isActive("/deployment")}>
                Deployment
              </Link>
              <Link href="/pricing" className={isActive("/pricing")}>
                Pricing
              </Link>
              <Link href="/value-chain" className={isActive("/value-chain")}>
                Value Chain
              </Link>
              <Link href="/comparison" className={isActive("/comparison")}>
                Comparison
              </Link>
              <Link href="/recommendations" className={isActive("/recommendations")}>
                Recommendations
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              Overview
            </Link>
            <Link href="/solutions" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/solutions' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              AI Solutions
            </Link>
            <Link href="/deployment" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/deployment' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              Deployment
            </Link>
            <Link href="/pricing" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/pricing' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              Pricing
            </Link>
            <Link href="/value-chain" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/value-chain' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              Value Chain
            </Link>
            <Link href="/comparison" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/comparison' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              Comparison
            </Link>
            <Link href="/recommendations" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/recommendations' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'}`}>
              Recommendations
            </Link>
          </div>
        </div>
      </div>
      
      {/* Search bar below navigation */}
      <div className="border-t border-gray-200 py-2 bg-gray-50">
        <div className="container-custom">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
