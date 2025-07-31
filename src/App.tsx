import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { ViewportContextProvider } from "~contexts";
import { QUERY_CLIENT, router } from "~utils";
import "~styles/global.scss";

export function App() {
    return (
        <ViewportContextProvider>
            <QueryClientProvider client={QUERY_CLIENT}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ViewportContextProvider>
    );
}
