import { auth } from '@/core/firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as signOutFirebase } from 'firebase/auth';

export async function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function signOut() {
    return signOutFirebase(auth);
}
