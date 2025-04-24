import { Observable } from 'rxjs';
import { collection, CollectionReference, deleteDoc, doc, orderBy, Query, query, serverTimestamp, writeBatch } from 'firebase/firestore';
import { db } from '@/core/firebase/firestore';
import { Contact } from '@/app/apps/contacts/contact';
import { collectionData as collectionDataPromise } from '@/core/utils/promisefire';
import { collectionData$ } from '@/core/firebase/rxfire';

const contactsColletion = collection(db, 'contacts');

function contactsNumbersByUserIdCollection(userId: string) {
    return collection(contactsColletion, userId, 'numbers');
}

export async function addContact(numbers: string[], currentUserId: string) {
    const batch = writeBatch(db);

    numbers.forEach((number) => {
        batch.set(
            doc(contactsNumbersByUserIdCollection(currentUserId)),
            { number, createdAt: serverTimestamp() }
        );
    });

    return batch.commit();
}

export async function deleteContact(id: string, currentUserId: string) {
    return deleteDoc(
        doc(contactsNumbersByUserIdCollection(currentUserId), id)
    );
}

export function getContacts$(currentUserId: string): Observable<Contact[]> {
    const contactsNumberRef: Query<Contact> = query(
        contactsNumbersByUserIdCollection(currentUserId) as CollectionReference<Contact>,
        orderBy('createdAt', 'asc')
    );

    return collectionData$(contactsNumberRef);
}

export async function getContacts(currentUserId: string) {
    return collectionDataPromise(contactsNumbersByUserIdCollection(currentUserId));
}

