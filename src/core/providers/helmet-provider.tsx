import { ReactNode } from 'react';
import { HelmetProvider as Provider } from 'react-helmet-async';

type HelmetProviderProps = {
    children: ReactNode;
}

export function HelmetProvider({ children }: HelmetProviderProps) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}
