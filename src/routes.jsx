import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MainLayouts from "./Layouts/MainLaoyouts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Books from "./Pages/Books/Books";
import BooksDetails from "./Components/BooksDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DashboardLayout from "./Layouts/DashboardLayout";
import AddBook from "./Components/AddBook";
import ManageUser from "./Pages/Admin/ManageUser";
import Settings from "./Pages/Admin/Settings";
import MyBooks from "./Pages/Users/MyBooks";
import UserProfile from "./Pages/Users/UserProfile";
import ManageBooks from "./Pages/Admin/ManageBooks";
import Error from "./Pages/Error/Error";
import UpdateBook from "./Components/UpdateBook";
import Favorite from "./Pages/Users/Favorite";
import PaymentHistory from "./Pages/Payment/PaymentHistory";
import Completed from "./Pages/Users/Completed";
import Feedback from "./Pages/Users/Feedback";
import Massage from "./Pages/Users/Massage";
import WellCome from "./Components/WellCome";
import ProviderRouter from "./Context/ProviderRouter";
import Blog from "./Pages/Blog/Blog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/booksDetails/:id",
        element: <BooksDetails />,
        loader: ({ params }) =>
          fetch(`https://books-shop-pzyk.onrender.com/book/${params.id}`),
      },
      {
        path: "/paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <WellCome />,
      },
      // Admin work
      {
        path: "addBooks",
        element: <AddBook />,
      },
      {
        path: "users",
        element: <ManageUser />,
      },
      {
        path: "books",
        element: <ManageBooks />,
      },
      {
        path: "updateBook/:id",
        element: <UpdateBook />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      // Users work
      {
        path: "MyBooks",
        element: <MyBooks />,
      },
      {
        path: "usersProfile",
        element: <UserProfile />,
      },
      {
        path: "favoriteBooks",
        element: <Favorite />,
      },
      {
        path: "completedOrders",
        element: <Completed />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "messages",
        element: <Massage />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default Router;
