import { RouterProvider } from "react-router";
import { router } from "~utils";
import "~styles/global.scss";

export function App() {
    return <RouterProvider router={router} />;
}
