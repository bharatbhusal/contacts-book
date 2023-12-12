import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import ErrorPage from "./error-page"
import Contact from "./contacts"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    }
])

const root = createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
)