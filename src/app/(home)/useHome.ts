import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';

import { Contact } from '@/types/Contact';
import { auth } from '@/libs/firebase';
import { deleteContact, getContactsSnapshot } from '@/services/contacts';
import { useAuth } from '@/hooks/useAuth';
import { APP_ROUTES } from '@/routes/app-routes';
import { useNavigate } from 'react-router';

export function useHome() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoadingContacts, setIsLoadingContacts] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate(APP_ROUTES.public.signIn);
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

            navigate(APP_ROUTES.public.signIn);
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
