import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden min-h-[700px] flex flex-col lg:flex-row">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-400/20 via-blue-100/40 to-transparent pointer-events-none"></div>

        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 relative z-10">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-bold mb-6 shadow-sm border border-blue-200">
              <span className="mr-2">📍</span> La Quinta's Local Experts
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-[#002147]">
              Medicare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
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
                className="inline-flex justify-center items-center bg-gradient-to-r from-[#002147] to-blue-900 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/about"
                className="inline-flex justify-center items-center bg-white text-[#002147] font-bold text-lg px-8 py-4 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
              >
                Meet the Team
              </Link>
            </div>

            {/* Social Proof - Floating Card */}
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-xl max-w-sm transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500`}>
                      User
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  <span className="text-xs text-gray-600 font-bold">Trusted by 500+ Locals</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">"Randy and Lisa made everything so easy to understand!"</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
          <div className="absolute inset-0 bg-blue-900/5 z-10 rounded-bl-[80px] pointer-events-none"></div>
          <Image
            src="/images/building.jpg"
            alt="Foulds Health Insurance Office Building"
            fill
            className="object-cover rounded-bl-[80px] shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We simplify the complex world of Medicare into three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#002147] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold text-[#002147] mb-3">Meeting</h3>
              <p className="text-gray-600">
                We sit down with you to break down your options and understand your specific needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#002147] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold text-[#002147] mb-3">Enrollment</h3>
              <p className="text-gray-600">
                We handle the paperwork to ensure your policy is issued correctly and on time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#002147] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold text-[#002147] mb-3">Support</h3>
              <p className="text-gray-600">
                We provide ongoing help with coverage, claims, and annual reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFD700]">
                <Image
                  src="/images/randy-lisa.png"
                  alt="Randy and Lisa Foulds"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">
                An Experienced Team You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Randy and Lisa Foulds have been helping seniors navigate Medicare for over a decade. We believe in treating every client like family, offering honest, transparent advice that puts your health first.
              </p>
              <Link
                href="/about"
                className="text-[#002147] font-bold text-lg hover:text-[#FFD700] transition-colors inline-flex items-center"
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