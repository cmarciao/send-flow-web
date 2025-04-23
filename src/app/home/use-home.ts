import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';

import { auth } from '@/libs/firebase';
import { getContacts, deleteContact } from '@/services/contacts';
import useObservable from '@/hooks/use-observable';

export function useHome() {
    const contacts = useObservable(getContacts, []);
    const [isLoadingContacts, setIsLoadingContacts] = useState(true);

    useEffect(() => {
        if (!!contacts) setIsLoadingContacts(false);
    }, [contacts]);

    function handleSignOut() {
        try {
            signOut(auth);
        } catch {
            toast.error('Something went wrong, please try again.');
        }
    }

    async function handleDeleteContact(id: string) {
        try {
            await deleteContact(id);

            toast.success('Contact deleted successfully.');
        } catch {
            toast.error('Something went wrong, please try again.');
        }
    }

    return {
        contacts: contacts || [],
        isLoadingContacts,
        handleSignOut,
        handleDeleteContact
    };
}
