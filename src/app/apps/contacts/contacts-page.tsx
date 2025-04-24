import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { LogOut, Info } from 'lucide-react';

import { Spinner, PageInformations } from '@/app/components';

import { ContactCard } from './contact-card';
import AddContactModal from './add-contact-modal';
import SendMessageModal from './send-message-modal';
import { deleteContact, getContacts$ } from './contacts-model';

import { cn } from '@/core/utils/cn';
import { auth } from '@/core/firebase/auth';
import useObservable from '@/core/hooks/use-observable';
import { useCurrentUser } from '../users/user-model';
import { handleDeleteContact } from '../messages/messages-facade';

export default function ContactsPage() {
    const currentUser = useCurrentUser()!;
    const [contacts, isLoadingContacts] = useObservable(() => getContacts$(currentUser.uid), [currentUser], []);

    function handleSignOut() {
        try {
            signOut(auth);
        } catch {
            toast.error('Something went wrong, please try again.');
        }
    }

    return (
        <main className="flex justify-center mt-24 mb-8">
            <PageInformations
                title='Contacts'
                description='Contacts list'
            />

            <section className='max-w-screen-md w-full'>
                <button onClick={handleSignOut}>
                    <LogOut color='white' />
                </button>

                <header className='text-center'>
                    <h1>My Contacts</h1>
                </header>

                {!isLoadingContacts && (
                    <section className={cn('flex flex-col mt-8')}>
                        <div className='flex items-center justify-between'>
                            <AddContactModal />
                            {contacts.length > 0 && <SendMessageModal />}
                        </div>

                        <h2 className={
                            cn(
                                'text-white mt-8 mb-4',
                                'sm:mb-0'
                            )
                        }>
                            You have {contacts.length} {contacts.length === 1 ? ' contact' : ' contacts'}
                        </h2>
                    </section>
                )}

                <div className='flex flex-col gap-4 mt-8'>
                    {isLoadingContacts && (
                        <div className='flex justify-center mt-24'>
                            <Spinner />
                        </div>
                    )}

                    {!isLoadingContacts && contacts.length > 0 && contacts.map((contact) => (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            onDeleteContact={(contactId) => handleDeleteContact(contactId, currentUser.uid)}
                        />
                    ))}

                    {!isLoadingContacts && contacts.length === 0 && (
                        <div className='flex flex-col justify-center items-center mt-16'>
                            <Info color='#FFDE07' size={86} />
                            <h2 className='text-center mt-4 text-white'>
                                Your contact list is empty, add new contacts to send messages to.
                            </h2>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
