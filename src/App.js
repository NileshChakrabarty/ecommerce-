import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Home } from "./components/Home";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import CheckoutPage from "./components/CheckoutPage";
export default function MyApp({ Component, pageProps }) {
  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/SignUp",
        element : <SignUp/>
    },
    {
      path : "/Cart",
      element : <Cart/>
  },
  {
    path : "/SignIn",
    element : <SignIn/>
},
{
  path : "/checkout",
  element : <CheckoutPage/>
},


])

    return (
 

      <RouterProvider router = {appRouter}/>
    );
}
        
