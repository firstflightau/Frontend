import { Link } from "react-router-dom";

const DashboardCard = ({ title, value, link, icon: Icon, colorIndex }) => {
  // Predefined color combinations for each card
  const colors = [
    { bgColor: "bg-red-100", iconColor: "text-red-500" },
    { bgColor: "bg-blue-100", iconColor: "text-blue-500" },
    { bgColor: "bg-green-100", iconColor: "text-green-500" },
    { bgColor: "bg-indigo-100", iconColor: "text-indigo-500" },
    { bgColor: "bg-orange-100", iconColor: "text-orange-500" },
    { bgColor: "bg-teal-100", iconColor: "text-teal-500" },
  ];

  // Safeguard for index overflow
  const selectedColor = colors[colorIndex % colors.length];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={`${selectedColor.bgColor} p-3 rounded-full ${selectedColor.iconColor}`}
        >
          {Icon && <Icon size={24} />}
        </div>
        <div className="ml-4">
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          {!link == "" && (
            <Link
              to={link}
              className="mt-2 text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              View more
            </Link>
          )}
        </div>
      </div>

      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
};

export default DashboardCard;
