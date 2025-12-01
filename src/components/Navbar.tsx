import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              <Image
                src="/images/logo.png"
                alt="Foulds Health Insurance Logo"
                width={180}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-[#005d9a] hover:text-[#1e9cd7] transition-colors duration-200 font-bold text-lg">Home</Link>
            <Link href="/about" className="text-[#005d9a] hover:text-[#1e9cd7] transition-colors duration-200 font-bold text-lg">About</Link>
            <Link href="/quotes" className="text-[#005d9a] hover:text-[#1e9cd7] transition-colors duration-200 font-bold text-lg">Quotes</Link>
            <Link href="/forms" className="text-[#005d9a] hover:text-[#1e9cd7] transition-colors duration-200 font-bold text-lg">Forms</Link>
            <Link href="/news" className="text-[#005d9a] hover:text-[#1e9cd7] transition-colors duration-200 font-bold text-lg">News</Link>
            <Link href="/contact" className="bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Contact Us
            </Link>
          </div>
          {/* Mobile menu button placeholder - can be expanded later */}
          <div className="md:hidden flex items-center">
            <button className="text-[#005d9a] hover:text-[#1e9cd7] focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
