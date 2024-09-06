import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Component/Home";
import Error from "./Component/Error";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
