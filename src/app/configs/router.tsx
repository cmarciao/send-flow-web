import { BrowserRouter, Route, Routes } from "react-router";
import { GuardRoutes } from "./guard-routes";

import SignInPage from "@/app/pages/sign-in";
import SignUpPage from "@/app/pages/sign-up";
import ContactsPage from "@/app/apps/contacts";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GuardRoutes />} >
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>

                <Route element={<GuardRoutes isPrivate />} >
                    <Route path="/" element={<ContactsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
