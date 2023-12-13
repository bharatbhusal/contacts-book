import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { action as destroyAction } from "./utils/destroy"
import App, { loader as appLoader, action as appAction } from "./utils/app"
import ErrorPage from "./error-page"
import Contact, { loader as contactLoader, action as contactAction } from "./contacts"
import EditContact, { action as editAction } from "./utils/edit"
import "./index.css"
import Index from "./utils"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        loader: appLoader,
        action: appAction,
        children: [
            { index: true, element: <Index /> },
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,

            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
            },
            {
                path: "contacts/:contactId/destroy",
                action: destroyAction,
                errorElement: <div>Oops! There was an error.</div>
            },

        ]
    },
])

const root = createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
)