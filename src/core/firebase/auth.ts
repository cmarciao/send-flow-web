import { Observable } from "rxjs";
import { firebaseApp } from "./firebase";
import { getAuth, User } from "firebase/auth";

export const auth = getAuth(firebaseApp());

export const authUser = new Observable<User | null>(subscriber => {
    const unsubscribe = auth.onIdTokenChanged(subscriber);
    return { unsubscribe };
});