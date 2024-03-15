import { redirect } from 'next/navigation';

export function useSignIn() {
	async function handleSignIn() {
		'use server';

		redirect('/');
	}

	return {
		handleSignIn
	};
}
