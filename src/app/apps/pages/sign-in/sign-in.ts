import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/core/database/firebase";

export async function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}