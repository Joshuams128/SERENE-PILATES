import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#FEFAE0] to-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-[120px] md:text-[180px] text-[#283517]/10 leading-none">404</h1>
        </div>
        
        <div className="mb-8">
          <h2 className="mb-4 text-[#283517]">Page Not Found</h2>
          <p className="text-[#606C37] font-light text-lg leading-relaxed mb-6">
            We couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#606C37] to-[#283517] text-[#FEFAE0] rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#606C37] border-2 border-[#606C37] rounded-full hover:bg-[#606C37] hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Search size={20} />
            Browse Classes
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-[#606C37]/20">
          <p className="text-[#606C37] font-light text-sm">
            Need help? <a href="/contact" className="text-[#BC6C24] hover:underline">Contact us</a> and we&apos;ll be happy to assist.
          </p>
        </div>
      </div>
    </div>
  );
}
