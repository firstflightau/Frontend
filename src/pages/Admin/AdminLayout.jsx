import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./AdminComponents/Sidebar";
import Headers from "./AdminComponents/Headers";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <Headers isCollapsed={isCollapsed} />
        <main className="px-8 pb-4 pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
