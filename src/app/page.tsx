import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#002147] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div> {/* Placeholder for pattern */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Medicare Made <span className="text-[#FFD700]">Easy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
              Our expert advice is always free, no obligation.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              {[
                { name: "Sarah J.", text: "Made everything so simple!" },
                { name: "Robert M.", text: "Trustworthy and kind." },
                { name: "Emily R.", text: "Highly recommended!" }
              ].map((review, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 max-w-xs mx-auto md:mx-0">
                  <div className="flex justify-center mb-2 text-[#FFD700]">
                    {"★★★★★"}
                  </div>
                  <p className="text-sm italic text-gray-200">"{review.text}"</p>
                  <p className="text-xs font-bold mt-2 text-gray-400">- {review.name}</p>
                </div>
              ))}
            </div>

            <Link
              href="/quotes"
              className="inline-block bg-[#FFD700] text-[#002147] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
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
              {/* Placeholder for an image - using a colored div for now */}
              <div className="aspect-video bg-gray-300 rounded-xl shadow-lg flex items-center justify-center text-gray-500">
                [Team Image Placeholder]
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