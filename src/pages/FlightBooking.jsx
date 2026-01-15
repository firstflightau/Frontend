import React from "react";
import aboutBanner from "../assets/images/gallery/about-banner-three.png";
import Partners from "../components/Partners";

const FlightHeroSection = () => {
  return (
    <>
    {/* Hero Section  */}
    <section className="relative bg-[#FFF3E6] overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FE0000]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block bg-[#00005A]/10 text-[#00005A] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Australia’s Trusted Flight Booking Platform
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#00005A]">
              Fly More, Pay Less <br />
              <span className="text-[#FE0000]">
                Cheapest Flight Tickets Guaranteed
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              First Flight helps you book domestic & international air tickets
              at the lowest possible price with secure payments and instant confirmation.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#FE0000] hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition">
                Search Cheapest Flights
              </button>

              <button className="border-2 border-[#00005A] text-[#00005A] px-8 py-4 rounded-full font-semibold hover:bg-[#00005A] hover:text-white transition">
                View Deals
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-10 flex items-center gap-8 text-sm text-gray-600">
              <div>✔ Lowest Fare Guarantee</div>
              <div>✔ Secure Payments</div>
              <div>✔ 24×7 Support</div>
            </div>
          </div>

          {/* RIGHT IMAGE VISUAL */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#00005A]/20 rounded-3xl"></div>

            <img
              src={aboutBanner}
              alt="Flight booking"
              className="relative rounded-3xl shadow-2xl object-cover"
            />

            {/* PRICE TAG */}
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-2xl font-extrabold text-[#FE0000]">
                ₹2,999*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PARTNER SECTION  */}
    <Partners/>
    <section className="relative bg-[#FFF3E6] overflow-hidden">
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-16">
      
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Why Travelers Choose{" "}
          <span className="text-blue-600">First Flight</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Same airlines, same seats — but up to <span className="font-semibold text-blue-600">60% cheaper fares</span>.
          Book smarter, fly cheaper.
        </p>
      </div>

      {/* COMPARISON CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-center mb-10">
          Monthly Flight Booking Cost Comparison
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* OTHER PLATFORMS */}
          <div className="border border-red-200 rounded-xl bg-red-50 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Other Booking Platforms</h3>
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                High Price
              </span>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between">
                <span>Base Fare</span>
                <span className="text-red-600">₹18,000</span>
              </li>
              <li className="flex justify-between">
                <span>Convenience Fee</span>
                <span className="text-red-600">₹2,500</span>
              </li>
              <li className="flex justify-between">
                <span>Hidden Charges</span>
                <span className="text-red-600">₹1,500</span>
              </li>
              <li className="flex justify-between">
                <span>Seat & Baggage</span>
                <span className="text-red-600">₹2,000</span>
              </li>
            </ul>

            <div className="border-t mt-6 pt-4 flex justify-between font-bold">
              <span>Total Cost</span>
              <span className="text-red-600">₹24,000</span>
            </div>
          </div>

          {/* FIRST FLIGHT */}
          <div className="border border-green-200 rounded-xl bg-green-50 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">First Flight</h3>
              <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                Best Price
              </span>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between">
                <span>Discounted Fare</span>
                <span className="text-green-600">₹13,000</span>
              </li>
              <li className="flex justify-between">
                <span>Zero Convenience Fee</span>
                <span className="text-green-600">₹0</span>
              </li>
              <li className="flex justify-between">
                <span>No Hidden Charges</span>
                <span className="text-green-600">₹0</span>
              </li>
              <li className="flex justify-between">
                <span>Seat & Baggage</span>
                <span className="text-green-600">Included</span>
              </li>
            </ul>

            <div className="border-t mt-6 pt-4 flex justify-between font-bold">
              <span>Total Cost</span>
              <span className="text-green-600">₹13,000</span>
            </div>
          </div>

        </div>

        {/* SAVINGS */}
        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold shadow">
            ✈️ Annual Savings: ₹1,30,000+
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="https://first-flight.com.au"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition"
        >
          Book Cheapest Flight Now
        </a>
      </div>
    </div>
    </section>
    <section>
        <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="rounded-2xl border border-[#FE0000]/30 bg-[#FE0000]/5 p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
            ✈️
          </div>
          <h3 className="text-2xl font-bold text-[#00005A]">
            Lowest Airfare
          </h3>
          <p className="mt-2 text-slate-600">
            Same flights, much cheaper prices
          </p>
          <div className="mt-6 text-3xl font-extrabold text-[#FE0000]">
            ₹5,000+
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Avg. savings per ticket
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-[#00005A]/30 bg-[#00005A]/5 p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
            💺
          </div>
          <h3 className="text-2xl font-bold text-[#00005A]">
            Best Deals
          </h3>
          <p className="mt-2 text-slate-600">
            Domestic & international flights
          </p>
          <div className="mt-6 text-3xl font-extrabold text-[#00005A]">
            +200
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Airline partners
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-[#FE0000]/30 bg-[#FE0000]/5 p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
            🔒
          </div>
          <h3 className="text-2xl font-bold text-[#00005A]">
            Secure Booking
          </h3>
          <p className="mt-2 text-slate-600">
            100% safe & verified payments
          </p>
          <div className="mt-6 text-3xl font-extrabold text-[#FE0000]">
            100%
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Secure transactions
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl border border-[#00005A]/30 bg-[#00005A]/5 p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
            📞
          </div>
          <h3 className="text-2xl font-bold text-[#00005A]">
            24/7 Support
          </h3>
          <p className="mt-2 text-slate-600">
            Booking help anytime
          </p>
          <div className="mt-6 text-3xl font-extrabold text-[#00005A]">
            &lt;2 min
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Response time
          </p>
        </div>

      </div>
    </div>
    </section>
    <section className="py-24" style={{ backgroundColor: "#FFF3E6" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold text-[#00005A] mb-16">
          What Our Flight Customers Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#FE0000]">
            <div className="flex text-[#FE0000] mb-4 text-lg">
              ★★★★★
            </div>

            <div className="border-l-4 border-[#00005A] pl-5 text-slate-700 italic leading-relaxed">
              “I booked an international flight at a much lower price than other
              platforms. The process was smooth and fast.”
            </div>

            <div className="mt-8 bg-[#FFF3E6] rounded-md px-4 py-3">
              <p className="font-semibold text-[#00005A]">
                Rohit Sharma
              </p>
              <p className="text-sm text-slate-600">
                Delhi → London
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#00005A]">
            <div className="flex text-[#FE0000] mb-4 text-lg">
              ★★★★★
            </div>

            <div className="border-l-4 border-[#FE0000] pl-5 text-slate-700 italic leading-relaxed">
              “Customer support helped me instantly with rescheduling.
              Prices were genuinely lower than airline sites.”
            </div>

            <div className="mt-8 bg-[#FFF3E6] rounded-md px-4 py-3">
              <p className="font-semibold text-[#00005A]">
                Emily Watson
              </p>
              <p className="text-sm text-slate-600">
                Sydney → Mumbai
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#00005A]">
            <div className="flex text-[#FE0000] mb-4 text-lg">
              ★★★★★
            </div>

            <div className="border-l-4 border-[#00005A] pl-5 text-slate-700 italic leading-relaxed">
              “Booked tickets for my entire family. Secure payment,
              lowest fares and excellent service.”
            </div>

            <div className="mt-8 bg-[#FFF3E6] rounded-md px-4 py-3">
              <p className="font-semibold text-[#00005A]">
                Arjun Mehra
              </p>
              <p className="text-sm text-slate-600">
                Toronto → New Delhi
              </p>
            </div>
          </div>

        </div>

        {/* Trust line */}
        <p className="text-center mt-14 text-slate-700">
          Trusted by <span className="font-semibold text-[#00005A]">50,000+</span>{" "}
          travelers worldwide ✈️
        </p>

      </div>
    </section>
    
    </>
  );
};

export default FlightHeroSection;
