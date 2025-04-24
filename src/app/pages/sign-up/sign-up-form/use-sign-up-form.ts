import { FormEvent } from 'react';
import toast from 'react-hot-toast';

import { signUp } from '@/app/apps/auth/auth';

export function useSignUpForm() {
    async function handleSignUp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();

        try {
            await signUp(email, password);
        } catch (e) {
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
