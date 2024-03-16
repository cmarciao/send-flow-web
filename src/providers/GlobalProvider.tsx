'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';

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
