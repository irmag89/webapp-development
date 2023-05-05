import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./root-page";
import AboutPage from "./about-page";
import ProtectedPage from "./protected-page";
import Error404Page from "./error404-page";
import ProtectRoute from "./components/ProtectRoute";
import Session from "./components/session";
import { useState } from "react";
import { UserContext } from "./hooks/useUser";

function App() {
  const [user, setUser] = useState<string | undefined>(undefined);

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
      element: (
        <ProtectRoute>
          <ProtectedPage />
        </ProtectRoute>
      ),
    },
    {
      path: "*",
      element: <Error404Page />,
    },
  ]);

  return (
    <div className="container mx-auto max-w-xl">
      <h1 className="text-2xl font-bold text-center">Auth Frontend Example</h1>

      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
        <Session />
      </UserContext.Provider>
    </div>
  );
}

export default App;
