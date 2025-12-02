import Link from "next/link";
import Image from "next/image";
import ReviewCarousel from "../components/ReviewCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-[#d2ebff] overflow-hidden min-h-[700px] flex flex-col lg:flex-row">

        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 relative z-10">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#d2ebff] text-[#005d9a] text-sm font-bold mb-6 shadow-sm border border-blue-100">
              <span className="mr-2">📍</span> La Quinta&apos;s Local Experts
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-[#005d9a]">
              Medicare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005d9a] to-[#1e9cd7]">
                Made Simple.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-lg">
              Navigate your options with confidence. Our expert advice is always free, with no obligation to enroll.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/quotes"
                className="inline-flex justify-center items-center bg-gradient-to-r from-[#005d9a] to-[#1e9cd7] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/about"
                className="inline-flex justify-center items-center bg-white text-[#005d9a] font-bold text-lg px-8 py-4 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
              >
                Meet the Team
              </Link>
            </div>

            {/* Social Proof - Carousel */}
            <div className="w-full max-w-md">
              <ReviewCarousel />
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#005d9a]/10 to-transparent z-10 pointer-events-none"></div>
          <Image
            src="/images/office-building.jpg"
            alt="Foulds Health Insurance Office Building"
            fill
            className="object-cover rounded-bl-[80px] shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-[#d2ebff] to-white border border-blue-100 rounded-full px-8 py-3 shadow-sm mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#005d9a] uppercase tracking-wide">How It Works</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We simplify the complex world of Medicare into three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#005d9a] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">1</div>
              <h3 className="text-xl font-bold text-[#005d9a] mb-3">Meeting</h3>
              <p className="text-gray-600 leading-relaxed">
                We sit down with you to break down your options and understand your specific needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#005d9a] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">2</div>
              <h3 className="text-xl font-bold text-[#005d9a] mb-3">Enrollment</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle the paperwork to ensure your policy is issued correctly and on time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#005d9a] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">3</div>
              <h3 className="text-xl font-bold text-[#005d9a] mb-3">Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide ongoing help with coverage, claims, and annual reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/randy-lisa.png"
                  alt="Randy and Lisa Foulds"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005d9a] mb-6">
                An Experienced Team You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Randy and Lisa Foulds have been helping seniors navigate Medicare for over a decade. We believe in treating every client like family, offering honest, transparent advice that puts your health first.
              </p>
              <Link
                href="/about"
                className="text-[#005d9a] font-bold text-lg hover:text-[#1e9cd7] transition-colors inline-flex items-center"
              >
                Meet the Team <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}