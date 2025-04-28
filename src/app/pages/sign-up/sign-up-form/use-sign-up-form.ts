import { FormEvent } from 'react';
import { handleSignUp as handleSignUpFirebase } from '@/app/apps/auth/auth-facade';

export function useSignUpForm() {
    async function handleSignUp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();

        await handleSignUpFirebase(email, password);
    }

    return {
        handleSignUp
    };
}
