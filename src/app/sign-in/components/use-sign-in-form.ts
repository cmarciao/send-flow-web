import { FormEvent } from 'react';
import toast from 'react-hot-toast';

import { signIn } from '@/services/auth';

export function useSignInForm() {
    async function handleSignIn(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();

        try {
            await signIn(email, password);
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
