import React from "react";
import aboutBanner from "../assets/images/gallery/about-banner-three.png";
import Partners from "../components/Partners";
import TopFlightRoute from "../components/TopFlightRoute";
import Contact from "./Contact";

const FlightHeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#FFF3E6] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FE0000]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block bg-[#00005A]/10 text-[#00005A] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Australia’s Trusted GDS-Based Flight Booking Platform
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#00005A]">
                Fly Smarter Across Australia <br />
                <span className="text-[#FE0000]">
                  GDS Net Fares — No OTA Markups
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-700 max-w-xl">
                First Flight gives you direct access to global airline inventory
                through certified GDS systems, offering transparent pricing,
                instant ticketing, and genuine airline fares for domestic and
                international routes.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://first-flight.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#FE0000] hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
                    Search Cheapest Flights
                  </button>
                </a>

                <a href="tel:+6129011201">
                  <button className="border-2 border-[#00005A] text-[#00005A] px-8 py-4 rounded-full font-semibold hover:bg-[#00005A] hover:text-white transition">
                    Click to Call
                  </button>
                </a>
              </div>

              {/* TRUST BADGES */}
              <div className="mt-10 flex items-center gap-8 text-sm text-gray-600">
                <div>✔ GDS Net Airline Fares</div>
                <div>✔ No Hidden Charges</div>
                <div>✔ Australia-Based Support</div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#00005A]/20 rounded-3xl"></div>

              <img
                src={aboutBanner}
                alt="Flight booking Australia"
                className="relative rounded-3xl shadow-2xl object-cover"
              />

              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-2xl font-extrabold text-[#FE0000]">
                  AUD 89*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />
      <TopFlightRoute />

      {/* GDS COMPARISON */}
      <section className="relative bg-[#FFF3E6] overflow-hidden">
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-16">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Why Australian Travelers Choose{" "}
              <span className="text-blue-600">First Flight</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Same airlines, same seats — but priced directly via GDS.
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-10">
              OTA Pricing vs GDS Net Fare
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* OTA */}
              <div className="border border-red-200 rounded-xl bg-red-50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Online Travel Platforms</h3>
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    Markups Applied
                  </span>
                </div>

                <ul className="space-y-4 text-gray-700">
                  <li className="flex justify-between">
                    <span>Airline Base Fare</span>
                    <span className="text-red-600">AUD 620</span>
                  </li>
                  <li className="flex justify-between">
                    <span>OTA Service Fee</span>
                    <span className="text-red-600">AUD 85</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dynamic Markups</span>
                    <span className="text-red-600">AUD 70</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Seat & Baggage</span>
                    <span className="text-red-600">Extra</span>
                  </li>
                </ul>

                <div className="border-t mt-6 pt-4 flex justify-between font-bold">
                  <span>Total Cost</span>
                  <span className="text-red-600">AUD 775</span>
                </div>
              </div>

              {/* GDS */}
              <div className="border border-green-200 rounded-xl bg-green-50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">First Flight (GDS)</h3>
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                    Net Airline Fare
                  </span>
                </div>

                <ul className="space-y-4 text-gray-700">
                  <li className="flex justify-between">
                    <span>Airline Net Fare</span>
                    <span className="text-green-600">AUD 620</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Service Fee</span>
                    <span className="text-green-600">AUD 0</span>
                  </li>
                  <li className="flex justify-between">
                    <span>No Hidden Charges</span>
                    <span className="text-green-600">AUD 0</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Seat & Baggage</span>
                    <span className="text-green-600">As per airline</span>
                  </li>
                </ul>

                <div className="border-t mt-6 pt-4 flex justify-between font-bold">
                  <span>Total Cost</span>
                  <span className="text-green-600">AUD 620</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold shadow">
                ✈️ Average Annual Savings: AUD 2,500+
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="min-h-screen bg-white px-6 py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="rounded-2xl border border-[#FE0000]/30 bg-[#FE0000]/5 p-8 text-center shadow-sm">
              ✈️
              <h3 className="text-2xl font-bold text-[#00005A] mt-4">
                Lower GDS Fares
              </h3>
              <div className="mt-6 text-3xl font-extrabold text-[#FE0000]">
                AUD 150+
              </div>
              <p className="text-sm text-slate-500">Per booking savings</p>
            </div>

            <div className="rounded-2xl border border-[#00005A]/30 bg-[#00005A]/5 p-8 text-center shadow-sm">
              💺
              <h3 className="text-2xl font-bold text-[#00005A] mt-4">
                Airline Access
              </h3>
              <div className="mt-6 text-3xl font-extrabold text-[#00005A]">
                300+
              </div>
              <p className="text-sm text-slate-500">Global airlines</p>
            </div>

            <div className="rounded-2xl border border-[#FE0000]/30 bg-[#FE0000]/5 p-8 text-center shadow-sm">
              🔒
              <h3 className="text-2xl font-bold text-[#00005A] mt-4">
                Secure Payments
              </h3>
              <div className="mt-6 text-3xl font-extrabold text-[#FE0000]">
                100%
              </div>
              <p className="text-sm text-slate-500">PCI compliant</p>
            </div>

            <div className="rounded-2xl border border-[#00005A]/30 bg-[#00005A]/5 p-8 text-center shadow-sm">
              📞
              <h3 className="text-2xl font-bold text-[#00005A] mt-4">
                Local Support
              </h3>
              <div className="mt-6 text-3xl font-extrabold text-[#00005A]">
                24/7
              </div>
              <p className="text-sm text-slate-500">Australia based</p>
            </div>

          </div>
        </div>
      </section>
      <section className="py-24" style={{ backgroundColor: "#FFF3E6" }}> <div className="max-w-7xl mx-auto px-6"> {/* Heading */} <h2 className="text-center text-4xl font-semibold text-[#00005A] mb-16"> What Our Flight Customers Say </h2> {/* Cards */} <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Card 1 */} <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#FE0000]"> <div className="flex text-[#FE0000] mb-4 text-lg"> ★★★★★ </div> <div className="border-l-4 border-[#00005A] pl-5 text-slate-700 italic leading-relaxed"> “I booked an international flight at a much lower price than other platforms. The process was smooth and fast.” </div> <div className="mt-8 bg-[#FFF3E6] rounded-md px-4 py-3"> <p className="font-semibold text-[#00005A]"> Rohit Sharma </p> <p className="text-sm text-slate-600"> Delhi → London </p> </div> </div> {/* Card 2 */} <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#00005A]"> <div className="flex text-[#FE0000] mb-4 text-lg"> ★★★★★ </div> <div className="border-l-4 border-[#FE0000] pl-5 text-slate-700 italic leading-relaxed"> “Customer support helped me instantly with rescheduling. Prices were genuinely lower than airline sites.” </div> <div className="mt-8 bg-[#FFF3E6] rounded-md px-4 py-3"> <p className="font-semibold text-[#00005A]"> Emily Watson </p> <p className="text-sm text-slate-600"> Sydney → Mumbai </p> </div> </div> {/* Card 3 */} <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#00005A]"> <div className="flex text-[#FE0000] mb-4 text-lg"> ★★★★★ </div> <div className="border-l-4 border-[#00005A] pl-5 text-slate-700 italic leading-relaxed"> “Booked tickets for my entire family. Secure payment, lowest fares and excellent service.” </div> <div className="mt-8 bg-[#FFF3E6] rounded-md px-4 py-3"> <p className="font-semibold text-[#00005A]"> Arjun Mehra </p> <p className="text-sm text-slate-600"> Toronto → New Delhi </p> </div> </div> </div> {/* Trust line */} <p className="text-center mt-14 text-slate-700"> Trusted by <span className="font-semibold text-[#00005A]">50,000+</span>{" "} travelers worldwide ✈️ </p> </div> </section> <Contact />
    </>
  );
};

export default FlightHeroSection;
