import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "payment",
        element: (
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

function App() {
  return (
    <AuthProvider>
      <div className="h-full min-h-screen bg-slate-200">
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </AuthProvider>
  );
}

export default App;
