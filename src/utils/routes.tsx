import { createBrowserRouter } from "react-router";
import { GlobalNotFoundPage, HomePage } from "~components/pages";
import { RootTemplate } from "~components/templates";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootTemplate />,
        errorElement: (
            <RootTemplate>
                <GlobalNotFoundPage />
            </RootTemplate>
        ),
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]);
