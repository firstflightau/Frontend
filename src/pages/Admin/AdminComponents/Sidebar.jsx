import { Link, useLocation } from "react-router-dom";
import {
  HiHome,
  HiTicket,
  HiChevronLeft,
  HiChevronRight,
  HiUsers,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { DollarSign, Headset, MessageCircleMore, Plane } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
    {
      path: "/admin/testimonial",
      name: "Testimonial",
      icon: <MessageCircleMore className="w-6 h-6" />,
    },
    {
      path: "/admin/instantpayment",
      name: "Instant Payment",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      path: "/admin/flightleads",
      name: "Flight Leads",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      name: "Flight Route",
      icon: <Plane className="w-6 h-6" />,
      subItems: [
        {
          path: "/admin/topflightadd",
          name: "Add Flight Route",
        },
        {
          path: "/admin/topflightedit",
          name: "View & Delete",
        },
      ],
    },
    {
      name: "Top Destination",
      icon: <Plane className="w-6 h-6" />,
      subItems: [
        {
          path: "/admin/topdestinationadd",
          name: "Add Top Destination",
        },
        {
          path: "/admin/topdestinationedit",
          name: "View & Delete",
        },
      ],
    },
    {
      name: "Seo",
      icon: <Plane className="w-6 h-6" />,
      subItems: [
        {
          path: "/admin/add/metadata",
          name: "Add MetaData",
        },
      ],
    },
  ];

  return (
    <div
      className={`h-screen bg-gray-800 fixed left-0 top-0 z-20 transition-all duration-300 ${
        isCollapsed ? "w-20 px-3 py-4" : "w-68 px-4 py-4"
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
            <li key={item.path || item.name}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center justify-between w-full py-2 rounded hover:bg-gray-700 
                    ${
                      item.subItems.some(
                        (subItem) => location.pathname === subItem.path
                      )
                        ? "bg-gray-900 text-white"
                        : "text-gray-300"
                    } 
                    ${isCollapsed ? "px-2" : "px-4"}`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {!isCollapsed && <span>{item.name}</span>}
                    </div>
                    {!isCollapsed && (
                      <span>
                        {openDropdown === item.name ? (
                          <HiChevronUp className="w-5 h-5" />
                        ) : (
                          <HiChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    )}
                  </button>

                  {!isCollapsed && openDropdown === item.name && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center py-2 px-3 rounded hover:bg-gray-700 
                            ${
                              location.pathname === subItem.path
                                ? "bg-gray-700 text-white"
                                : "text-gray-300"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
