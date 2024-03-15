import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

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
				{children}
			</body>
		</html>
	);
}
