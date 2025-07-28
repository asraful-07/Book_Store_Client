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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //    {
      //     path: "/movie/:id",
      //     element: <MovieDetails />,
      //     loader: ({ params }) =>
      //       fetch(`http://localhost:8080/movies/${params.id}`),
      //   },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/booksDetails/:id",
        element: <BooksDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/book/${params.id}`),
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
        element: <h1>Hello Dashboard Profile</h1>,
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
    ],
  },
]);

export default Router;
