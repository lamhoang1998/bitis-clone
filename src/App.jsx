import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Men, { loader as menLoader } from "./pages/Men";
import Women, { loader as womenLoader } from "./pages/Women";
import Girls, { loader as girlLoader } from "./pages/Girls";
import Details from "./pages/Details";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import AppLayout from "./components/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "", index: true, element: <Men />, loader: menLoader },

        { path: "men", element: <Men />, loader: menLoader },
        { path: "women", element: <Women />, loader: womenLoader },
        { path: "girls", element: <Girls />, loader: girlLoader },
        { path: "details", element: <Details /> },
        { path: "details/:id", element: <Details /> },
        { path: "wishlist", element: <WishList /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
