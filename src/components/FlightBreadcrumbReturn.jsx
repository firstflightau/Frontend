import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { findAirportByCode } from "../redux/slices/feature2/utils";
import OnewaySearchFormInner from "./onewayForm/OnewaySearchFormInner";
import ReturnSearchFormInner from "./ReturnForm/ReturnSearchFormInner";

const FlightBreadcrumbReturn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  let from = queryParams.get("from");
  let to = queryParams.get("to");

  let date = queryParams.get("date");
  let retrunDate = queryParams.get("retrunDate");
  let Adult = queryParams.get("Adult");
  let Child = queryParams.get("Child");
  let Infant = queryParams.get("Infant");
  let ClassName = queryParams.get("class");
  let FlightCabinClass = queryParams.get("FlightCabinClass");
  let travellers = Number(Adult) + Number(Child) + Number(Infant);
  // console.log(JSON.parse(ClassName), "FlightCabinClass");
  return (
    <>
      <section className="breadcrumbs-area breadcrumb-bg">
        <div className="hidden md:flex">
          <ReturnSearchFormInner />
        </div>

        <div className="px-3 flex md:hidden">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <h6>
                {from} - {to}
              </h6>
              <p>
                {Adult} {Adult.length > 1 ? "Adults" : "Adult"}
                {Child > 0 && `, ${Child} ${Child > 1 ? "Children" : "Child"}`}
              </p>
            </div>
            <div onClick={() => navigate("/")}>
              <i class="fa-solid fa-pen-to-square text-2xl"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightBreadcrumbReturn;
