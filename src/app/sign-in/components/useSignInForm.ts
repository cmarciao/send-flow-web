import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import { signIn } from '@/services/auth';
import { APP_ROUTES } from '@/routes/app-routes';
import { FormEvent } from 'react';

export function useSignInForm() {
    const navigate = useNavigate();

    async function handleSignIn(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();

        try {
            await signIn(email, password);

            navigate(APP_ROUTES.private.home);
        } catch (e) {
            // @ts-expect-error comment
            if (e?.code === 'auth/invalid-credential') {
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
