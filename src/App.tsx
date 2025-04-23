import { Router } from "@/routes/Router";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { GlobalProvider } from "./providers/GlobalProvider";

export function App() {
    return (
        <GlobalProvider>
            <HelmetProvider>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />

                <Router />
            </HelmetProvider>
        </GlobalProvider>
    );
}