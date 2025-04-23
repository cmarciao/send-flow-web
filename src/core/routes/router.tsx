import { BrowserRouter, Route, Routes } from "react-router";
import { GuardRoutes } from "./guard-routes";

import SignIn from "@/app/apps/pages/sign-in";
import SignUp from "@/app/apps/pages/sign-up";
import Contacts from "@/app/apps/contacts";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GuardRoutes />} >
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>

                <Route element={<GuardRoutes isPrivate />} >
                    <Route path="/" element={<Contacts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
