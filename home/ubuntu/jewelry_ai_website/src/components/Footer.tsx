"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Jewelry AI Research</h3>
            <p className="text-gray-300">
              Comprehensive analysis of vertical search AI solutions in the jewelry industry
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 list-none pl-0">
              <li><Link href="/" className="hover:text-indigo-300 transition-colors">Home</Link></li>
              <li><Link href="/solutions" className="hover:text-indigo-300 transition-colors">AI Solutions</Link></li>
              <li><Link href="/recommendations" className="hover:text-indigo-300 transition-colors">Recommendations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-gray-300 list-none pl-0">
              <li><Link href="/deployment" className="hover:text-indigo-300 transition-colors">Deployment Scenarios</Link></li>
              <li><Link href="/pricing" className="hover:text-indigo-300 transition-colors">Pricing Models</Link></li>
              <li><Link href="/comparison" className="hover:text-indigo-300 transition-colors">Solution Comparison</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Jewelry AI Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
