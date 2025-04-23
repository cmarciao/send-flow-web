import { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import { signUp } from '@/services/auth';
import { APP_ROUTES } from '@/routes/app-routes';

export function useSignUpForm() {
    const navigate = useNavigate();

    async function handleSignUp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();

        try {
            await signUp(email, password);

            navigate(APP_ROUTES.private.home);
        } catch (e) {
            console.log({ e });
            // @ts-expect-error comment
            if (e?.code?.includes('already')) {
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
