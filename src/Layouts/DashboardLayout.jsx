import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const DashboardLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          {user.role === "admin" ? (
            <>
              <li className="py-2">Manage Users</li>
              <li className="py-2">Manage Books</li>
              <li className="py-2">Manage Books</li>
            </>
          ) : (
            <>
              <li className="py-2">My Books</li>
              <li className="py-2">Profile</li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
