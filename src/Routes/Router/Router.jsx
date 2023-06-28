import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import AllUser from "../../Pages/DashboardItem/Admin/AllUser/AllUser";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { 
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'login',
            element: <Login></Login>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        // Admin
        {
          path: 'alluser',
          element: <AllUser></AllUser>
        }
      ]
    }
  ]);

  export default router