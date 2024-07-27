import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import Error from "./Component/Error";

function App() {
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
