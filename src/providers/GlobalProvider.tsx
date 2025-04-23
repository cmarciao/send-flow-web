import { ReactNode } from 'react';
import { AuthProvider } from './AuthProvider';

type GlobalProviderProps = {
    children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
