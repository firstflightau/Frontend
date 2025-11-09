import { useLocation, useNavigate } from "react-router-dom";
import ReturnSearchFormInner from "./ReturnForm/ReturnSearchFormInner";

const FlightBreadcrumbReturn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  let from = queryParams.get("from");
  let to = queryParams.get("to");

  let Adult = queryParams.get("Adult");
  let Child = queryParams.get("Child");
  let Infant = queryParams.get("Infant");
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
