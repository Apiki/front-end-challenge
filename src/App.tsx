import { RouterProvider } from "react-router";
import { ViewportContextProvider } from "~contexts";
import { router } from "~utils";
import "~styles/global.scss";

export function App() {
    return (
        <ViewportContextProvider>
            <RouterProvider router={router} />
        </ViewportContextProvider>
    );
}
