import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "61290112019";
  const message = "Hello, I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-75 animate-ping"></span>

      {/* Main Button */}
      <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
        >
          <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.756 5.6 2.077 7.97L0 32l7.85-2.058A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.146c-2.67 0-5.156-.78-7.27-2.12l-.52-.33-4.66 1.22 1.24-4.54-.34-.54a13.92 13.92 0 01-2.14-7.33C2.31 8.64 8.64 2.31 16 2.31c7.36 0 13.69 6.33 13.69 14.69 0 7.36-6.33 13.69-13.69 13.69zm7.52-10.17c-.41-.2-2.42-1.19-2.8-1.33-.38-.14-.66-.2-.94.2-.28.41-1.08 1.33-1.33 1.6-.24.28-.49.31-.9.1-.41-.2-1.74-.64-3.31-2.04-1.22-1.09-2.04-2.44-2.28-2.85-.24-.41-.03-.63.18-.83.19-.19.41-.49.61-.73.2-.24.27-.41.41-.69.14-.28.07-.52-.03-.73-.1-.2-.94-2.27-1.29-3.11-.34-.83-.69-.72-.94-.73-.24-.01-.52-.01-.8-.01s-.73.1-1.11.52c-.38.41-1.45 1.42-1.45 3.46s1.49 4.01 1.7 4.29c.2.28 2.93 4.48 7.11 6.28.99.43 1.76.68 2.36.87.99.31 1.89.27 2.6.16.79-.12 2.42-.99 2.76-1.94.34-.94.34-1.74.24-1.94-.1-.2-.38-.31-.79-.52z"/>
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;