import { of } from 'rxjs';
import { collectionData } from 'rxfire/firestore';
import { collection, CollectionReference, deleteDoc, doc, orderBy, Query, query, serverTimestamp, writeBatch } from 'firebase/firestore';

import { auth, db } from '@/libs/firebase';
import { Contact } from '@/types/contact';

export async function addContact(numbers: string[]) {
    const batch = writeBatch(db);

    numbers.forEach((number) => {
        batch.set(
            doc(collection(db, 'contacts', auth?.currentUser!.uid, 'numbers')),
            { number, createdAt: serverTimestamp() }
        );
    });

    return batch.commit();
}

export function deleteContact(id: string) {
    return deleteDoc(
        doc(db, 'contacts', auth?.currentUser!.uid, 'numbers', id)
    );
}

export function getContacts() {
    const uid = auth?.currentUser?.uid;

    if (!uid) return of([]);

    const contactsNumberRef: Query<Contact> = query(
        collection(db, 'contacts', uid, 'numbers') as CollectionReference<Contact>,
        orderBy('createdAt', 'asc')
    );

    return collectionData<Contact>(contactsNumberRef, { idField: 'id' });
}
