import React, { useState } from "react";

const AdminInstantPayment = () => {
  const [isCopied, setIsCopied] = useState(false);
  const paymentLink =
    "https://cvfrpayments.com/cvfr-payment/client/hpp/fNvMZrytiBqqOer4VZqn";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Instant Payment Portal
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              href="https://cvfrpayments.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Payment Login
            </a>
          </div>

          <div className="flex-1 md:ml-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 p-3 bg-gray-50 rounded-md border border-gray-200 overflow-x-auto">
                <p className="text-gray-700 font-mono text-sm truncate">
                  {paymentLink}
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-md font-medium flex-shrink-0 flex items-center justify-center ${
                  isCopied
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors duration-200`}
              >
                {isCopied ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link Copied!
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-4 rounded-md border border-blue-100">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            Instructions
          </h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Use the admin login button to access the payment portal</li>
            <li>Share the payment link with your clients</li>
            <li>Click "Copy Link" to easily share the payment URL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminInstantPayment;
