import React from "react";

const BlogDetail = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Why Australians Are Overpaying for Flights (And How to Avoid It in 2026)
        </h1>

        {/* Hero Image */}
        <img
          src="https://source.unsplash.com/900x400/?airplane,travel"
          alt="flight"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        {/* Introduction */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          If you’ve ever searched for a flight and noticed the price increase within minutes, you’re not alone.
          Thousands of Australians unknowingly overpay for flights every single day—sometimes by hundreds of dollars.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          1. Dynamic Pricing Is Working Against You
        </h2>

        <img
          src="https://source.unsplash.com/800x300/?data,analytics"
          className="w-full h-48 object-cover rounded-lg my-4"
          alt=""
        />

        <p className="text-gray-700">
          Airlines use dynamic pricing based on search frequency, demand, and user behavior.
          Repeated searches often increase prices.
        </p>

        <p className="mt-2 font-medium text-blue-600">
          👉 Solution: Use incognito mode or clear cookies.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          2. Booking at the Wrong Time
        </h2>

        <img
          src="https://source.unsplash.com/800x300/?calendar,planning"
          className="w-full h-48 object-cover rounded-lg my-4"
          alt=""
        />

        <ul className="list-disc ml-6 text-gray-700">
          <li>Domestic: 2–6 weeks</li>
          <li>International: 6–10 weeks</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          3. Ignoring Alternative Routes
        </h2>

        <img
          src="https://source.unsplash.com/800x300/?map,travel"
          className="w-full h-48 object-cover rounded-lg my-4"
          alt=""
        />

        <p className="text-gray-700">
          Connecting flights via Singapore, Kuala Lumpur, or Bangkok can save 20–40%.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          4. Hidden Airline Charges
        </h2>

        <img
          src="https://source.unsplash.com/800x300/?money,fees"
          className="w-full h-48 object-cover rounded-lg my-4"
          alt=""
        />

        <ul className="list-disc ml-6 text-gray-700">
          <li>Baggage fees</li>
          <li>Seat selection</li>
          <li>Meals</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          5. Not Using Expert Help
        </h2>

        <img
          src="https://source.unsplash.com/800x300/?travel,agent"
          className="w-full h-48 object-cover rounded-lg my-4"
          alt=""
        />

        <p className="text-gray-700">
          Travel agencies can provide better routes, unpublished fares, and support.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          6. Peak Season Mistakes
        </h2>

        <p className="text-gray-700">
          Avoid peak travel dates. Travel mid-week for cheaper fares.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-red-600 mt-6">
          7. Not Comparing Options
        </h2>

        <p className="text-gray-700">
          Always compare multiple platforms before booking.
        </p>

        {/* Summary Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6 rounded">
          <h3 className="font-semibold text-blue-700 mb-2">Quick Tips:</h3>
          <ul className="list-disc ml-6 text-gray-700 text-sm">
            <li>Use incognito mode</li>
            <li>Book in correct time window</li>
            <li>Compare multiple platforms</li>
            <li>Check full price</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center bg-gradient-to-r from-blue-600 to-red-500 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-2">
            Looking for the best flight deals?
          </h3>
          <p className="mb-3">Get expert assistance and save more</p>
          <a
            href="https://www.first-flight.com.au"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200"
          >
            Visit Website
          </a>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;