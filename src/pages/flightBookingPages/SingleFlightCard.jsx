import dayjs from "dayjs";
import { findAirportByCode } from "../../redux/slices/feature2/utils";
import { useEffect, useState } from "react";
import { standardizeFlightDetailResponse } from "../../utils/utils";
import { useSelector } from "react-redux";

const SingleFlightCard = ({ type, flight, isOnward }) => {
  const FlightData = flight;
  const [flightDetail, setFlightDetail] = useState(null); // Set initial state to null to check later
  const reducerState = useSelector((state) => state);
  useEffect(() => {
    if (flight) {
      const data = standardizeFlightDetailResponse(flight?.flights); // Get standardized data
      // console.log(data, "itememmmem");
      //   let data = [];
      setFlightDetail(data); // Update state with data
    }
  }, [flight]);

  // console.log(FlightData, "flight data ");

  // console.log(flightDetail);

  const FlightDetailsCard = ({ item, isLast }) => {
    return (
      <div className="w-full  flex flex-col gap-2  mb-2 rounded-2xl p-2 md:p-4">
        <div className="flex justify-between w-full ">
          <div className="flex gap-2">
            {/* <img
              src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${item?.flightName}.png`}
              // src=""
              alt="QF"
              width="30%"
              height=""
              className="object-contain rounded-md"
            /> */}
            <div className="w-[30px] h-[30px]">
              <img
                class="w-full object-cover rounded-md"
                src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/${item?.flightName}.png`}
                // src={`https://raw.githubusercontent.com/The-SkyTrails/Images/main/FlightImages/QF.png`}
                alt="Flight "
              />
            </div>
            <div className="flex flex-col justify-between ">
              <p className="text-sm md:text-lg font-semibold">
                {item?.flightName} | {item?.flightNumber}
                {item?.operatingCarrierName && (
                  <span className="text-sm">
                    &nbsp; ({`Operated By ${item?.operatingCarrierName}`}{" "}
                    {item?.operatingCarrier &&
                      ` | ${item?.operatingCarrier} ${item?.operatingCarrierNumber}`}
                    )
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="text-sm md:text-lg">
            {/* {reducerState?.flightDetails?.FlightCabinClass}{" "}
            <span className="font-semibold">Economy | SAVER</span> */}
          </div>
        </div>
        <div className="flex w-full justify-between items-center gap-2">
          <div className="px-2 rounded-sm bg-indigo-100 ">
            <p className="text-xs md:text-sm ">
              Start on{" "}
              <span className=" font-semibold">
                - {dayjs(item?.dateOfDeparture).format("DD MMM, YY")}
              </span>
            </p>
          </div>
          <div className="px-2 rounded-sm bg-indigo-100 ">
            <p className="text-xs md:text-sm">
              Ends on{" "}
              <span className=" font-semibold">
                - {dayjs(item?.dateOfArrival).format("DD MMM, YY")}
              </span>
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between gap-1 md:gap-2">
          <div>
            <p className="text-xl font-semibold">{item?.departureTime}</p>
            <p className="text-base font-semibold">{item?.Departure}</p>
          </div>
          <div className=" relative w-full flex my-1 items-center  flex-col">
            <div className="absolute z-0 flex flex-row items-center w-1/2 top-1/2">
              <div className="  w-2 -top-1/2  h-2 rounded-full bg-gray-400"></div>
              <div className=" w-full  border-gray-400  border-t-2 border-dashed"></div>
              <div className="  w-2 -top-1/2  h-2 rounded-full bg-gray-400"></div>
            </div>
            <div
              className={` ${
                type == "Return" ? "bg-blue-50" : "bg-white"
              }    flex justify-center  px-2 relative`}
            >
              <div className="flex flex-col  px-1">
                <span className="text-center text-lg font-semibold ">
                  {item?.duration}
                </span>
                <span className="text-center text-sm">Duration</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold  text-right">
              {" "}
              {item?.arrivalTime}
            </p>
            <p className="text-base font-semibold text-right">
              {item?.Arrival}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between gap-2">
          <div>
            <p className="text-md font-semibold">
              {findAirportByCode(item?.Departure).name}
            </p>
            <p className="text-sm text-zinc-700 opacity-75">
              {findAirportByCode(item?.Departure)
                .code?.toLowerCase()
                ?.includes("airport")
                ? findAirportByCode(item?.Departure).code
                : `${findAirportByCode(item?.Departure).code} Airport`}
            </p>
            <p className="text-sm font-semibold  text-indigo-500">
              Terminal {item?.terminalD}
            </p>
          </div>

          <div>
            <p className="text-md font-semibold text-right">
              {findAirportByCode(item?.Arrival).name}
            </p>
            <p className="text-sm text-zinc-700 text-right opacity-75">
              {findAirportByCode(item?.Arrival)
                ?.code?.toLowerCase()
                ?.includes("airport")
                ? findAirportByCode(item?.Arrival).code
                : `${findAirportByCode(item?.Arrival).code} Airport`}
            </p>

            <p className="text-sm font-semibold  text-indigo-500 text-right">
              Terminal {item?.terminalA}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start md:items-center w-full flex-col md:flex-row gap-2">
          {/* <div
            className="text-xs md:text-sm font-gray-400 flex flex-col justify-start
            md:justify-between md:flex-row w-full  "
            >
            <p>Baggage - 30kg</p>
            <p>Cabin - 7kg</p>
            </div> */}
        </div>
        {!isLast && (
          <div class="relative w-full flex justify-center items-center">
            <p class="text-center bg-green-100  z-10 rounded-full px-3 py-1 text-gray-600 inline-block font-medium text-sm shadow-inner border border-green-200">
              {item?.layover} Layover in{" "}
              {findAirportByCode(item?.Arrival)?.name}
            </p>
            <div className="w-full absolute border-double border-t-[1px] border-gray-300"></div>
            {/* <div class="absolute border-b-2 border-gray-800 w-full -z-0 left-0 "></div> */}
          </div>
        )}
      </div>
    );
  };

  console.log(type, "type in the single flight cred");

  return (
    <div
      className={`border p-2 flex flex-col rounded-2xl gap-2 ${
        type == "Return" ? "bg-blue-50" : ""
      }   relative`}
    >
      <p className="text-sm absolute top-0 left-0  md:text-[13px] bg-gradient-to-r from-primary-6000 to-red-300  text-white rounded-ss-2xl rounded-ee-2xl py-1 px-3">
        {type}
      </p>
      <div className="flex flex-col w-full pt-4">
        <div className="flex gap-2 items-center w-full">
          <p className="text-sm  md:text-xl font-bold">
            {FlightData?.flights?.[0]?.Departure?.location} -{" "}
            {
              FlightData?.flights?.[FlightData?.flights?.length - 1]?.Arrival
                ?.location
            }
          </p>
          <p className="text-xs md:text-sm mt-1 opacity-75">
            {FlightData?.flights?.length > 1
              ? `${FlightData?.flights?.length - 1} Stop `
              : "Non-stop "}
            | All departure/arrival times are in local time
          </p>
        </div>
      </div>
      {flightDetail?.map((item, index) => {
        const isLast = index === flightDetail?.length - 1;
        return <FlightDetailsCard item={item} isLast={isLast} />;
      })}
    </div>
  );
};

export default SingleFlightCard;
