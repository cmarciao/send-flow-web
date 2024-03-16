import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';

import { Contact } from '@/types/Contact';
import { auth } from '@/libs/firebase';
import { deleteContact, getContactsSnapshot } from '@/services/contacts';
import { useAuth } from '@/hooks/useAuth';
import { APP_ROUTES } from '@/constants/app-routes';

export function useHome() {
	const { user } = useAuth();
	const { push } = useRouter();

	const [contacts, setContacts] = useState<Contact[]>([]);
	const [isLoadingContacts, setIsLoadingContacts] = useState(true);

	useEffect(() => {
		if(!user) {
			push(APP_ROUTES.public.signIn);
			return;
		}

		const unbscribe = getContactsSnapshot((contacts) => {
			setContacts(contacts);
			setIsLoadingContacts(false);
		});

		return () => unbscribe();
	}, [user]);

	function handleSignOut() {
		try {
			signOut(auth);

			push(APP_ROUTES.public.signIn);
		} catch {
			toast.error('Something went wrong.');
		}
	}

	async function handleDeleteContact(id: string) {
		try {
			await deleteContact(id);

			toast.success('Contact deleted successfully.');
		} catch {
			toast.error('Something went wrong.');
		}
	}

	return {
		contacts,
		isLoadingContacts,
		handleSignOut,
		handleDeleteContact
	};
}
