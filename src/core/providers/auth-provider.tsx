import { useEffect, useState } from "react";
import { authState } from "rxfire/auth";
import { auth } from "@/core/database/firebase";
import { Spinner } from "@/core/components";
import { AuthContext, AuthContextProvider } from "@/core/contexts/auth-context";
import useObservable from "@/core/hooks/use-observable";

export const AuthProvider = ({ children }: AuthContextProvider) => {
    const user = useObservable(() => authState(auth), []);
    const [isLoadingUser, setIsLoadingUser] = useState(true);

    useEffect(() => {
        if (user !== undefined) {
            setIsLoadingUser(false);
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user: user || null }}>
            {isLoadingUser ? (
                <div className='h-screen flex items-center justify-center'>
                    <Spinner />
                </div>
            ) : children}
        </AuthContext.Provider>
    );
};
