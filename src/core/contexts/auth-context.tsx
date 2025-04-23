import { ReactNode, createContext } from 'react';
import { User } from 'firebase/auth';

export type AuthContextProps = {
    user: User | null;
}

export type AuthContextProvider = {
    children: ReactNode;
}

export const AuthContext = createContext({
    user: null
} as AuthContextProps);
