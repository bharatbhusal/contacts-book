import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App, { loader as appLoader, action as appAction } from "./utils/app"

// import App, { action as appAction } from "./App"
import ErrorPage from "./error-page"
import Contact, { loader as contactLoader } from "./contacts"
import EditContact, { action as editAction } from "./utils/edit"
import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: appLoader,
        action: appAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                // loader: contactLoader,
                action: editAction,
            },
        ]
    },
])

const root = createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
)