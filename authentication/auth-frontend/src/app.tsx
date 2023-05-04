import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./root-page";
import AboutPage from "./about-page";
import ProtectedPage from "./protected-page";
import Error404Page from "./error404-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/protected",
      element: <ProtectedPage />,
    },
    {
      path: "*",
      element: <Error404Page />,
    },
  ]);

  return (
    <div className="container mx-auto max-w-xl">
      <h1 className="text-2xl font-bold text-center">Auth Frontend Example</h1>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
