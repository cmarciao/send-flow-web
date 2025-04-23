import { LogOut, Info } from 'lucide-react';

import { Spinner, PageInformations, ContactCard, AddContactModal, SendMessageModal } from '@/core/components';

import { cn } from '@/core/utils/cn';
import { useHome } from './use-contacts';

export default function Contacts() {
    const {
        contacts,
        isLoadingContacts,
        handleSignOut,
        handleDeleteContact
    } = useHome();

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
                            onDeleteContact={handleDeleteContact}
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
