import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { signIn } from '@/services/auth';
import { APP_ROUTES } from '@/constants/app-routes';

export function useSignInForm() {
	const { push } = useRouter();

	async function handleSignIn(formData: FormData) {
		const email = formData.get('email')!.toString();
		const password = formData.get('password')!.toString();

		try {
			await signIn(email, password);

			push(APP_ROUTES.private.home);
		} catch(e) {
			// @ts-expect-error comment
			if(e?.code === 'auth/invalid-credential') {
				toast.error('Email or password is invalid.');
			} else {
				toast.error('Something went wrong, try again.');
			}
		}
	}

	return {
		handleSignIn
	};
}
