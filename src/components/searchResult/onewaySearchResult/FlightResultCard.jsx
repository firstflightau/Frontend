import React, { useState } from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedFlight } from "../../../redux/slices/SelectedFlight/selectedFlightSlice";
import freemeal from "../../../assets/images/freemeal.png";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import ViewFlightDetails from "./ViewFlightDetails";
import { addMarkup } from "../../../utils/utils";

dayjs.extend(utc);
dayjs.extend(duration);

const FlightResultCard = ({
  item,
  index,
  isOnward,
  selectedIndex,
}) => {
  const type = isOnward ? "onward" : "return";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const brandAttribute = item?.productsoption?.[0]?.Brand?.BrandAttribute;

  const handleNavigate = (item) => {
    dispatch(
      setSelectedFlight({
        Onward: item,
        Return: null,
      })
    );
    const newWindow = window.open("/flight/review", "_blank");
    if (newWindow) newWindow.focus();
  };

  const [isFlightDetail, setIsFlightDetail] = useState(false);

  /* ===================== ✅ DURATION FIX (UTC SAFE) ===================== */

  const firstFlight = item?.flights?.[0];
  const lastFlight = item?.flights?.[item?.flights?.length - 1];
/* ===================== FINAL TOTAL DURATION FIX ===================== */

let safeDurationText = "--";

// ✅ 1. TRUST API TOTAL DURATION (MOST ACCURATE)
const apiTotalMinutes =
  item?.JourneyDuration ||
  item?.journeyDuration ||
  item?.TotalJourneyDuration ||
  item?.ElapsedTime ||
  item?.totalDuration;

if (apiTotalMinutes && !isNaN(apiTotalMinutes)) {
  const hours = Math.floor(apiTotalMinutes / 60);
  const minutes = apiTotalMinutes % 60;
  safeDurationText = `${hours}H ${minutes}M`;
}

// ❌ REMOVE DATE-TIME DIFFERENCE FOR INTERNATIONAL FLIGHTS

/* ===================== FIX END ===================== */

  

  // ✅ 2️⃣ FALLBACK – UTC DATE TIME DIFFERENCE (NO IST ISSUE)
  else if (
    firstFlight?.Departure?.date &&
    firstFlight?.Departure?.time &&
    lastFlight?.Arrival?.date &&
    lastFlight?.Arrival?.time
  ) {
    const startTime = dayjs
      .utc(`${firstFlight.Departure.date}T${firstFlight.Departure.time}`);

    const endTime = dayjs
      .utc(`${lastFlight.Arrival.date}T${lastFlight.Arrival.time}`);

    const totalMinutes = endTime.diff(startTime, "minute");

    if (totalMinutes > 0) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      safeDurationText = `${hours}H ${minutes}M`;
    }
  }

  /* ===================== ✅ DURATION FIX END ===================== */

  const onwardPrice =
    item?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice;

  const onwardTaxes =
    item?.productsoption?.[0]?.BestCombinablePrice?.TotalTaxes;

  const onwardDestination =
    item?.flights?.[item?.flights?.length - 1]?.Arrival?.location;

  const onwardMarkup = addMarkup(onwardPrice, "onward", onwardDestination);

  const grandTotal = Number(onwardPrice) + Number(onwardMarkup);

  return (
    <div className="w-full relative transition-all ease-in-out hover:scale-[1.01] bg-white shadow-sm rounded-lg p-2 md:p-3 hover:shadow-sm cursor-pointer border">
      <div className="flex justify-between">
        {/* Airline */}
        <div className="flex flex-1 flex-col items-start justify-center gap-2 max-w-[45px] md:max-w-none">
          <div className="w-[30px] h-[30px]">
            <img
              className="w-full object-cover rounded-md"
              src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${item?.flights?.[0]?.carrier}.png`}
              alt="Flight"
            />
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            {item?.flights?.[0]?.carrier}-{item?.flights?.[0]?.number}
          </p>
        </div>

        {/* Departure */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <p className="text-xs md:text-sm text-gray-500">
            {item?.flights?.[0]?.Departure?.location}
          </p>
          <p className="font-semibold text-gray-700">
            {item?.flights?.[0]?.Departure?.time?.slice(0, 5)}
          </p>
        </div>

        {/* Duration */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-2">
          <p className="font-semibold text-gray-700 text-xs md:text-sm">
            {safeDurationText}
          </p>

          <div className="absolute flex flex-row items-center w-2/3 top-1/2">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-full border-gray-400 border-t-2 border-dashed"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            {item?.flights?.length === 1
              ? "Non-stop"
              : `${item?.flights?.length - 1}-stop`}
          </p>
        </div>

        {/* Arrival */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <p className="text-xs md:text-sm text-gray-500">
            {lastFlight?.Arrival?.location}
          </p>
          <p className="font-semibold text-gray-700">
            {lastFlight?.Arrival?.time?.slice(0, 5)}
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-1 flex-col items-end justify-center gap-2 min-w-[82px]">
          <p className="text-xs md:text-lg font-semibold text-gray-700">
            ${grandTotal.toFixed(2)} AUD
          </p>
          <button
            onClick={() => handleNavigate(item)}
            className="px-3 bg-primary-6000 hover:bg-primary-500 text-white font-medium py-1 rounded-md text-sm"
          >
            Select
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-2">
        <div>
          {brandAttribute?.some(
            (i) => i?.classification === "Meals" && i?.inclusion === "Included"
          ) && (
            <div className="text-green-500 flex items-center gap-2 py-0.5 px-2 rounded-md border border-green-400 bg-green-100">
              <img src={freemeal} alt="free meal" width={20} />
              <p className="text-green-600 text-[12px]">Free Meals</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsFlightDetail((pre) => !pre)}
          className="text-secondary-6000 flex gap-2 items-center font-semibold text-xs md:text-[14px]"
        >
          View Details
          {isFlightDetail ? <ChevronsUp size={16} /> : <ChevronsDown size={16} />}
        </button>
      </div>

      {isFlightDetail && <ViewFlightDetails key={index} item={item} />}
    </div>
  );
};

export default FlightResultCard;
