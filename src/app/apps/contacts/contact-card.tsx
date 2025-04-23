import { Trash } from 'lucide-react';
import formatPhone from '@/core/utils/format-phone';
import { Contact } from '@/app/apps/contacts/contact';

type ContactCardProps = {
    contact: Contact;
    onDeleteContact(id: string): void;
}

export function ContactCard({ contact, onDeleteContact }: ContactCardProps) {
    return (
        <div
            className='bg-[#1a1a1a] p-4 rounded-md flex items-center justify-between'
        >
            <span>{formatPhone(contact.number)}</span>

            <button onClick={() => onDeleteContact(contact.id)}>
                <Trash color='red' />
            </button>
        </div>
    );
}
