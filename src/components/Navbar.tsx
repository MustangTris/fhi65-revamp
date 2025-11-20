import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#002147] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              FHI<span className="text-[#FFD700]">65</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-[#FFD700] transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="hover:text-[#FFD700] transition-colors duration-200 font-medium">About</Link>
            <Link href="/quotes" className="hover:text-[#FFD700] transition-colors duration-200 font-medium">Quotes</Link>
            <Link href="/forms" className="hover:text-[#FFD700] transition-colors duration-200 font-medium">Forms</Link>
            <Link href="/news" className="hover:text-[#FFD700] transition-colors duration-200 font-medium">News</Link>
            <Link href="/contact" className="bg-[#FFD700] text-[#002147] px-4 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors duration-200">
              Contact
            </Link>
          </div>
          {/* Mobile menu button placeholder - can be expanded later */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#FFD700] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
