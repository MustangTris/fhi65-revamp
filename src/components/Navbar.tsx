import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full px-6 py-3 shadow-lg flex items-center justify-between w-full max-w-5xl transition-all duration-300 hover:shadow-xl">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Foulds Health Insurance Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {['Home', 'About', 'Quotes', 'Forms', 'News'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="px-4 py-2 text-[#005d9a] font-medium rounded-full hover:bg-blue-50/50 transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-[#005d9a] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#1e9cd7] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-[#005d9a] p-2 rounded-full hover:bg-blue-50/50 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

