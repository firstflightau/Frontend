import axios from "axios";
import { apiURL } from "../constant/Constant";

export const handlePayment = async (
  jwtToken,
  grandTotal,
  reservationIdDevKit,
  successFunction
) => {
  const bookingID = sessionStorage.getItem("bookingId");

  try {
    const payload = {
      amount: `${grandTotal.toFixed(2)}`,
      bookingId: bookingID,
      // add other necessary fields required by your backend
    };

    // Build headers conditionally
    const headers = {
      "Content-Type": "application/json",
    };
    if (jwtToken) {
      headers.Authorization = `Bearer ${jwtToken}`;
    }

    const config = { headers };

    const response = await axios.post(
      `${apiURL.baseURL}/api/transaction/create`,
      payload,
      config
    );

    // redirect to payment
    successFunction(response?.data?.data?.redirectUrl);
  } catch (error) {
    console.error("Payment init failed:", error);
    throw error;
  }
};
