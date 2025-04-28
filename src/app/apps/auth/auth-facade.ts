import toast from "react-hot-toast";
import { signIn, signOut, signUp } from "./auth";

export async function handleSignIn(email: string, password: string) {
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

export async function handleSignUp(email: string, password: string) {
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

export async function handleSignOut() {
    try {
        await signOut();
    } catch {
        toast.error('Something went wrong, please try again.');
    }
}
