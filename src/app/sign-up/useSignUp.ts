import { redirect } from 'next/navigation';

export function useSignUp() {
	async function handleSignUp() {
		'use server';

		redirect('/');
	}

	return {
		handleSignUp
	};
}
