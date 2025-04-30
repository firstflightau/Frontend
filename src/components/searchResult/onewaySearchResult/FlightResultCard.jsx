import React, { useState } from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedFlight } from "../../../redux/slices/SelectedFlight/selectedFlightSlice";
import freemeal from "../../../assets/images/freemeal.png";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ViewFlightDetails from "./ViewFlightDetails";

dayjs.extend(duration);

const FlightResultCard = ({
  item,
  // handleSelectedChange,
  // key,
  index,
  isOnward,
  selectedIndex,
}) => {
  const type = isOnward ? "onward" : "return";
  // console.log(
  //   item?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice,
  //   "itemitemitemitemitem"
  // );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const brandAttribute = item?.productsoption?.[0]?.Brand?.BrandAttribute;
  // console.log(brandAttribute, "brand attributes");

  const handleNavigate = (item) => {
    dispatch(
      setSelectedFlight({
        Onward: item,
        Return: null,
      })
    );
    const newWindow = window.open("/flight/review", "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  const isSelectedIndex = selectedIndex?.[type] == index;

  const [isFlightDetail, setIsFlightDetail] = useState(false);
  let durations1 = item?.flights?.reduce((sum, dur) => {
    // console.log(dur, dur?.duration, "|djhdsbf");
    return sum.add(dayjs.duration(dur?.duration));
  }, dayjs.duration(0));
  let durations11 = `${durations1.hours()}H:${durations1.minutes()}M`;

  // console.log(item, "item");
  return (
    <div class="w-full relative transition-all ease-in-out hover:scale-[1.01] bg-white shadow-sm rounded-lg  p-2 px-2 md:p-3 md:px-3 hover:shadow-sm cursor-pointer border">
      <div class="flex justify-between">
        <div className="flex flex-1 flex-col items-start justify-center gap-2">
          <div className="w-[30px] h-[30px]">
            <img
              class="w-full object-cover rounded-md"
              src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${item?.flights?.[0]?.carrier}.png`}
              // src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/QF.png`}
              alt="Flight "
            />
          </div>

          <div>
            <p class="text-xs md:text-sm text-gray-500">
              {item?.flights?.[0]?.carrier}-{item?.flights?.[0]?.number}
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <p class="text-xs md:text-sm text-gray-500">
            {item?.flights?.[0]?.Departure?.location}
          </p>
          <p class="font-semibold text-gray-700">
            {" "}
            {item?.flights?.[0]?.Departure?.time?.slice(0, 5)}
          </p>
        </div>

        {/* <!-- Duration and Stops --> */}
        <div className="relative  flex flex-1 flex-col items-center justify-center gap-2">
          {/* <p class="text-sm text-gray-500">{item?.destination}</p> */}
          <p class="font-semibold text-gray-700 text-xs md:text-sm">
            {durations11}
          </p>

          <div className="absolute flex flex-row items-center w-2/3 top-1/2">
            <div className="  w-2 -top-1/2  h-2 rounded-full bg-gray-400"></div>
            <div className=" w-full  border-gray-400  border-t-2 border-dashed"></div>
            <div className="  w-2 -top-1/2  h-2 rounded-full bg-gray-400"></div>
          </div>

          <p class="text-xs text-gray-400 mt-2">
            {item?.flights?.length == 1
              ? "Non-stop"
              : `${item?.flights?.length - 1}-stop`}
          </p>
        </div>

        {/* <!-- Arrival Time --> */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <p class="text-xs md:text-sm text-gray-500">
            {" "}
            {/* {findAirportByCode(item?.destination)?.name} */}
            {item?.flights?.[item?.flights?.length - 1]?.Arrival?.location}
          </p>
          <p class="font-semibold text-gray-700">
            {item?.flights?.[item?.flights?.length - 1]?.Arrival?.time.slice(
              0,
              5
            )}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-end justify-center gap-2 min-w-[75px]">
          <p class={`text-xs md:text-lg font-semibold text-gray-700"`}>
            {/* $ {item?.productsoption?.[0]?.Price?.TotalPrice} AUD */}${" "}
            {item?.productsoption?.[0]?.BestCombinablePrice?.TotalPrice} AUD
          </p>
          <button
            onClick={() => handleNavigate(item)}
            className=" px-3 bg-primary-6000 hover:bg-primary-500 text-white font-medium py-1 rounded-md text-sm"
          >
            Select
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center mt-2">
        <div className="flex gap-2 items-center">
          <div>
            {brandAttribute?.some(
              (item) =>
                item?.classification == "Meals" && item?.inclusion == "Included"
            ) && (
              <div className="text-green-500 flex items-center gap-2 py-0.5 px-2 rounded-md border border-green-400 bg-green-100">
                <img src={freemeal} alt="free meal" width={20} />
                <p className="text-green-600 text-[12px]">Free Meals</p>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => setIsFlightDetail((pre) => !pre)}
          className="text-secondary-6000  flex gap-2 items-center font-semibold text-xs md:text-[14px] hover:text-indigo-700 focus:outline-none text-right"
        >
          View Details{" "}
          {isFlightDetail ? (
            <ChevronsUp size={16} />
          ) : (
            <ChevronsDown size={16} />
          )}
        </button>
      </div>
      {isFlightDetail && <ViewFlightDetails key={index} item={item} />}
    </div>
  );
};

export default FlightResultCard;
