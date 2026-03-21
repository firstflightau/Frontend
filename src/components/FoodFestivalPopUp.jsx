import React, { useState, useEffect } from "react";

const FestivalPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      {/* Popup Card */}
      <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#00005A] via-[#001a8c] to-[#FE0000] text-white animate-[scaleUp_0.4s_ease] z-50">

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 transition text-white rounded-full w-8 h-8 flex items-center justify-center z-50"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-6 text-center">

          {/* Badge */}
          <div className="inline-block bg-white text-[#FE0000] px-4 py-1 rounded-full text-xs font-bold mb-3 shadow">
            LIMITED TIME OFFER
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold mb-2 leading-snug">
            ✈️ April Easter Festival
          </h2>

          {/* Offer */}
          <div className="text-3xl font-black mb-3 tracking-wide">
            🎉 $50 AUD OFF
          </div>

          <p className="text-sm text-gray-200 mb-6">
            Grab your Easter travel deal now and fly at unbeatable fares.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-2">

            {/* CALL BUTTON */}
            <a
              href="tel:+61290112019"
              className="bg-white text-[#00005A] px-5 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition z-50 relative"
            >
              📞 Call Now
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/61290112019"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition z-50 relative"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>

          </div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scaleUp {
            0% {
              transform: scale(0.7);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FestivalPopup;