'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { APP_ROUTES } from '@/constants/app-routes';

export default function SignInLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const { user } = useAuth();
	const { replace } = useRouter();

	useEffect(() => {
		if(user) {
			replace(APP_ROUTES.private.home);
		}
	}, []);

	return children;
}
