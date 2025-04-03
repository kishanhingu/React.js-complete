import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { Error } from "./pages/Error";
import { AppLayout } from "./components/layout/AppLayout";
import { SuccessPageProtectedRouter } from "./Protected/SuccessPageProtectedRouter";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/success",
        element: <SuccessPageProtectedRouter element={<Success />} />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
