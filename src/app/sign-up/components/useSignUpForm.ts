import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { signUp } from '@/services/auth';
import { APP_ROUTES } from '@/constants/app-routes';

export function useSignUpForm() {
	const { push } = useRouter();

	async function handleSignUp(formData: FormData) {
		const email = formData.get('email')!.toString();
		const password = formData.get('password')!.toString();

		try {
			await signUp(email, password);

			push(APP_ROUTES.private.home);
		} catch(e) {
			// @ts-expect-error comment
			if(e?.code === 'auth/email-already-in-use)') {
				toast.error('User already exists.');
			} else {
				toast.error('Something went wrong, try again.');
			}
		}
	}

	return {
		handleSignUp
	};
}
