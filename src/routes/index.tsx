import App from "@/App";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Dashboard, Login, Register } from "@/pages";
import ThankYou from "@/pages/ThankYou";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Page not found.</div>,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>
            }
        ]
    },
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/thankyou",
        element: <ThankYou />
    },
])

export default router;