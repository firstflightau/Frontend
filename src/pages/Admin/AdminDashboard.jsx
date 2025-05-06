import DashboardCard from "./AdminComponents/DashboardCard";
import { Users, Calendar, DollarSign, StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { HiSupport, HiTicket } from "react-icons/hi";
import { apiURL } from "../../constant/Constant";
import axios from "axios";
import { useSelector } from "react-redux";

const SkeletonCard = () => (
  <div className=" hover:bg-gray-50  overflow-hidden shadow-sm rounded-xl border border-gray-300">
    <div className="px-4 py-5 sm:p-6 flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-300  rounded-full animate-pulse"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        <div className="h-8 bg-gray-300  rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const reducerState = useSelector((state) => state?.auth?.user);
  const token = reducerState?.token;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDashboardCount = async () => {
      try {
        const response = await axios.get(
          // `${apiURL.baseURL}/api/admin/dashboard/counts`,
          `https://ffbackend-sn85.onrender.com/api/admin/dashboard/counts`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response?.data?.data);

        setLoader(false);
      } catch (error) {
        console.error("Failed to fetch markup data:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchDashboardCount();
  }, []);
  // console.log(data, "data");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {loader ? (
          [1, 2, 3, 4, 5].map((_, index) => <SkeletonCard key={index} />)
        ) : (
          <>
            <DashboardCard
              title="Total Users"
              value={data?.totalUser}
              link="/admin/users"
              icon={Users}
              colorIndex={0}
            />
            <DashboardCard
              title="Total Bookings"
              value={data?.totalBooking}
              link="/admin/bookings"
              icon={HiTicket}
              colorIndex={1}
            />
            <DashboardCard
              title="Total Transaction"
              value={data?.totalSuccessTransaction}
              link=""
              icon={DollarSign}
              colorIndex={2}
            />
            <DashboardCard
              title="Total Enquiry"
              value={data?.totalContact}
              link="admin/enquiry"
              icon={HiSupport}
              colorIndex={3}
            />
            <DashboardCard
              title="Total Review"
              value={data?.totalTestimonial}
              link="admin/testimonial"
              icon={StarIcon}
              colorIndex={4}
            />
          </>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
