import { ReactNode, createContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/libs/firebase';
import { Spinner } from '@/components/Spinner';

type AuthContextProps = {
    user: User | null;
}

type AuthContextProvider = {
    children: ReactNode;
}

export const AuthContext = createContext({
	user: null
} as AuthContextProps);

export const AuthProvider = ({ children }: AuthContextProvider) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingUser, setIsLoadingUser] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if(user) setUser(user);
			else setUser(null);

			setIsLoadingUser(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{isLoadingUser ? (
				<div className='h-screen flex items-center justify-center'>
					<Spinner />
				</div>
			) : children}
		</AuthContext.Provider>
	);
};
