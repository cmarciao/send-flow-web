import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { GlobalProvider } from '@/providers/GlobalProvider';

import '../styles/globals.css';

const inter = Roboto({
	subsets: ['latin'],
	weight: ['400', '700', '900']
});

export const metadata: Metadata = {
	title: 'Send Flow',
	description: 'Manage your contacts.',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GlobalProvider>
					<Toaster
						position="top-right"
						reverseOrder={false}
					/>

					{children}
				</GlobalProvider>
			</body>
		</html>
	);
}
