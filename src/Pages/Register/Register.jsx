import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { register: reg, handleSubmit } = useForm();
  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await register(data);
    if (result.success) {
      toast.success(result.message);
      navigate("/login");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...reg("name")}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...reg("email")}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          {...reg("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
      <Link to="/login" className="text-blue-600 font-semibold">
        Login
      </Link>
    </div>
  );
};

export default Register;
