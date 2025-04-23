import { Router } from "@/routes/router";
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "@/providers/global-provider";

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
