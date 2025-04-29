import axios from "axios";
import { apiURL } from "../constant/Constant";

export const handlePayment = async (
  jwtToken,
  grandTotal,
  reservationIdDevKit,
  successFunction
) => {
  console.log(grandTotal, "grandTotalpy");
  try {
    const payload = {
      amount: `${grandTotal.toFixed(2)}`,
      // amount: "500",
      reservationId: reservationIdDevKit,
    };

    console.log(jwtToken, "payload");

    const config = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `${apiURL.baseURL}/api/transaction/create`,
      payload,
      config
    );

    successFunction(response?.data?.data?.redirectUrl);

    console.log(response.data);
  } catch (error) {
    console.error("PNR generation failed:", error);
  }
};
