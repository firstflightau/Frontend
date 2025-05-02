import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiTicket,
  HiChevronLeft,
  HiChevronRight,
  HiUsers,
} from "react-icons/hi";
import { DollarSign, Headset } from "lucide-react";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: <HiHome className="w-6 h-6" />,
    },
    {
      path: "/admin/users",
      name: "Users",
      icon: <HiUsers className="w-6 h-6" />,
    },
    {
      path: "/admin/bookings",
      name: "Bookings",
      icon: <HiTicket className="w-6 h-6" />,
    },
    {
      path: "/admin/markup",
      name: "Markup",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      path: "/admin/enquiry",
      name: "Enquiry",
      icon: <Headset className="w-6 h-6" />,
    },
  ];

  return (
    <div
      className={`h-screen bg-gray-800 fixed left-0 top-0 z-20 transition-all duration-300 ${
        isCollapsed ? "w-20 px-3 py-4" : "w-64 px-4 py-4"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-8">
        <div
          className={`overflow-hidden text-white text-2xl font-bold transition-all duration-300 ${
            isCollapsed ? "opacity-0 max-h-0" : "opacity-100 max-h-[100px]"
          }`}
        >
          <h4 className="mb-0 text-nowrap">Admin</h4>
        </div>

        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-gray-700 p-2 rounded"
        >
          {isCollapsed ? (
            <HiChevronRight className="w-6 h-6" />
          ) : (
            <HiChevronLeft className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Scrollable Menu */}
      <div className="overflow-y-auto h-[calc(100vh-8rem)]">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center py-2 rounded hover:bg-gray-700 
                    ${
                      location.pathname === item.path
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    } 
                    ${isCollapsed ? "px-2" : "px-4"}`}
              >
                <span className="mr-3">{item.icon}</span>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
