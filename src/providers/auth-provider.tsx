import { useEffect, useState } from "react";
import { authState } from "rxfire/auth";
import { auth } from "@/libs/firebase";
import { Spinner } from "@/components";
import { AuthContext, AuthContextProvider } from "@/contexts/auth-context";
import useObservable from "@/hooks/use-observable";

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
