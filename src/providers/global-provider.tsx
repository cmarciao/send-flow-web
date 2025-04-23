import { ReactNode } from 'react';

import { AuthProvider } from './auth-provider';
import { HelmetProvider } from './helmet-provider';

type GlobalProviderProps = {
    children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
    return (
        <AuthProvider>
            <HelmetProvider>
                {children}
            </HelmetProvider>
        </AuthProvider>
    );
}
