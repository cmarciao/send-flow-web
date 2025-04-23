import { Router } from "@/core/routes/router";
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "@/core/providers/global-provider";

export function App() {
    return (
        <GlobalProvider>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <Router />
        </GlobalProvider>
    );
}
