import { BrowserRouter, Route, Routes } from "react-router";
import { GuardRoutes } from "./guard-routes";

import SignIn from "@/app/sign-in";
import SignUp from "@/app/sign-up";
import Home from "@/app/home";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GuardRoutes />} >
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>

                <Route element={<GuardRoutes isPrivate />} >
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
