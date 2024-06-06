import { Home } from "./pages/home/Home"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Users } from "./pages/users/Users";
import { Cars } from "./pages/cars/Cars";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import { Login } from "./pages/login/Login";
import "./styles/global.scss"
import Car from "./pages/car/Car";
import User from "./pages/user/User";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
function App() {
 const Layout = () =>{
  return(
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
        <QueryClientProvider client={queryClient}>
            <Outlet/>
        </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  )
 }



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/users",
          element: <Users />
        },
        {
          path:"/cars",
          element: <Cars />
        },
        {
          path:"/cars/:id",
          element: <Car />
        },
        {
          path:"/users/:id",
          element: <User />
        },
      ],
    },
    {
      path:"/login",
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
