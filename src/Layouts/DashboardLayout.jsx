import { Navigate, Outlet, Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBook,
  FaUserCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaBookOpen,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useAuth } from "../provider/AuthProvider";
import logo from "../assets/images/logo.png";

const DashboardLayout = () => {
  const { user, loading, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-900 text-white p-4 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <h2 className="text-xl font-bold">Dashboard</h2>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={20} className="text-orange-400" />
          ) : (
            <FaBars size={20} className="text-green-400" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${sidebarCollapsed ? "md:w-20" : "md:w-64"} 
        ${isMobileMenuOpen ? "fixed inset-0 z-50" : "hidden"} 
        md:block bg-gray-900 text-white transition-all duration-300 flex-shrink-0`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Mobile Close Button */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-28 h-10" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 focus:outline-none text-orange-400"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Desktop Collapse Button */}
          <div className="hidden md:flex justify-end mb-4">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-full hover:bg-gray-800 text-green-400"
              aria-label={
                sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
            >
              {sidebarCollapsed ? "»" : "«"}
            </button>
          </div>

          {/* Logo/Brand (hidden when collapsed) */}
          {!sidebarCollapsed && (
            <div className="text-xl font-bold mb-6 hidden md:block">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-28 h-10" />
              </Link>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {user.role === "admin" ? (
                <>
                  <li>
                    <Link
                      to="/dashboard"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaHome className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Overview</span>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/addBooks"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard/addBooks"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaBookOpen className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Add Books</span>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/users"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard/users"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaUsers className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Manage Users</span>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/books"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard/books"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaBook className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Manage Books</span>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/settings"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard/settings"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaUserCog className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Settings</span>}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/dashboard"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaHome className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Overview</span>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/MyBooks"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard/MyBooks"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaBook className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>My Books</span>}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/usersProfile"
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        location.pathname === "/dashboard/usersProfile"
                          ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
                          : "hover:bg-white/5 hover:text-green-300 text-gray-300"
                      }`}
                    >
                      <FaUserCog className="text-lg mr-3" />
                      {!sidebarCollapsed && <span>Profile</span>}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* User Profile & Logout */}
          <div
            className={`mt-auto pt-4 border-t border-gray-700 ${
              sidebarCollapsed ? "text-center" : ""
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">
                {user.name.charAt(0).toUpperCase()}
              </div>
              {!sidebarCollapsed && (
                <div className="ml-3">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.role}</p>
                </div>
              )}
            </div>
            <button
              onClick={logout}
              className={`w-full flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors ${
                sidebarCollapsed ? "justify-center" : ""
              } text-green-400 hover:text-green-300`}
            >
              <FaSignOutAlt />
              {!sidebarCollapsed && <span className="ml-3">Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden">
        <div className="p-4 md:p-6">
          {/* Breadcrumbs */}
          <div className="mb-4 md:mb-6 text-sm text-gray-600">
            Dashboard{" "}
            {location.pathname
              .split("/")
              .slice(2)
              .map(
                (part, i) =>
                  part && (
                    <span key={i}>
                      <span className="mx-2">/</span>
                      <span className="capitalize">{part}</span>
                    </span>
                  )
              )}
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
