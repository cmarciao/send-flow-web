import { Router } from "./configs/router";
import { Toaster } from "react-hot-toast";
import { Authorization } from "./apps/auth/authorization";
import { HelmetProvider } from "react-helmet-async";

export function App() {
    return (
        <Authorization>
            <HelmetProvider>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />

                <Router />
            </HelmetProvider>
        </Authorization>
    );
}
