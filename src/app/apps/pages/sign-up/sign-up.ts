import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/core/database/firebase";

export async function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}
