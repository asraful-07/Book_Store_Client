import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://books-shop-pzyk.onrender.com",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
