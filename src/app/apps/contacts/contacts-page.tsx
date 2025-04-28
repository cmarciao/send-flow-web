import { Spinner } from '@/app/components';

import AddContactModal from './add-contact-modal';
import SendMessageModal from './send-message-modal';
import { getContacts$ } from './contacts-model';

import { cn } from '@/core/utils/cn';
import useObservable from '@/core/hooks/use-observable';
import { useCurrentUser } from '../users/user-model';
import { EmptyContactListMessage } from './empty-contact-list-message';
import { ContactPageLayout } from './layouts/contact-page-layout';
import { ContactList } from './contact-list';

export default function ContactsPage() {
    const currentUser = useCurrentUser()!;
    const [contacts, isLoadingContacts] = useObservable(() => getContacts$(currentUser.uid), [currentUser], []);

    if (isLoadingContacts) {
        return (
            <ContactPageLayout>
                <div className='flex justify-center mt-24'>
                    <Spinner />
                </div>
            </ContactPageLayout>
        )
    }

    const hasContacts = contacts.length > 0;

    return (
        <ContactPageLayout>
            <section className='flex flex-col mt-8'>
                <div className='flex items-center justify-between'>
                    <AddContactModal />
                    {hasContacts && <SendMessageModal />}
                </div>
            </section>

            <h2 className={
                cn(
                    'text-white mt-8 mb-4',
                    'sm:mb-0'
                )
            }>
                You have {contacts.length} {contacts.length === 1 ? ' contact' : ' contacts'}
            </h2>

            <div className='flex flex-col gap-4 mt-8'>
                {hasContacts && <ContactList contacts={contacts} />}

                {!hasContacts && <EmptyContactListMessage />}
            </div>
        </ContactPageLayout>
    );
}
