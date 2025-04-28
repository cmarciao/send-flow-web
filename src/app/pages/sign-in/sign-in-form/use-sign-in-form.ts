import { FormEvent } from 'react';
import { handleSignIn as handleSignInFirebase } from '@/app/apps/auth/auth-facade';

export function useSignInForm() {
    async function handleSignIn(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get('email')!.toString();
        const password = formData.get('password')!.toString();

        await handleSignInFirebase(email, password);
    }

    return {
        handleSignIn
    };
}
