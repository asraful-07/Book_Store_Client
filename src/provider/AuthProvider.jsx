import { createContext, useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  const login = async (email, password) => {
    try {
      const res = await axiosSecure.post("/login", { email, password });
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data || "Login failed" };
    }
  };

  const register = async (formData) => {
    try {
      const res = await axiosSecure.post("/register", formData);
      return { success: true, message: res.data.message };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data || "Registration failed",
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
