import { BrowserRouter, Route, Routes } from "react-router";

import SignIn from "@/app/sign-in/page";
import SignUp from "@/app/sign-up/page";
import Home from "@/app/(home)/page";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
