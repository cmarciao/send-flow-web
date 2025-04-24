import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/core/firebase/firestore';
import { deleteContact, getContacts } from '../contacts/contacts-model';
import toast from 'react-hot-toast';

const messagesCollection = collection(db, 'messages');

function messagesByUserIdCollection(userId: string) {
    return collection(messagesCollection, userId, 'messages');
}

export async function sendMessage(currentUserId: string, message: string) {
    const contacts = await getContacts(currentUserId);

    if (contacts.length === 0) throw new Error('No contact to send a message to.');

    const data = { message, contacts };

    return addDoc(messagesByUserIdCollection(currentUserId), data);
}

export async function handleDeleteContact(contactId: string, currentUserId: string) {
    try {
        await deleteContact(contactId, currentUserId);

        toast.success('Contact deleted successfully.');
    } catch {
        toast.error('Something went wrong, please try again.');
    }
}