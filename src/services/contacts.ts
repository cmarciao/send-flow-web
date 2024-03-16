import { auth, db } from '@/libs/firebase';
import { Contact } from '@/types/Contact';

import { collection, deleteDoc, doc, onSnapshot, orderBy, query, writeBatch } from 'firebase/firestore';

export async function addContact(numbers: string[]) {
	const batch = writeBatch(db);

	numbers.forEach((number) => {
		batch.set(
			doc(collection(db, 'contacts', auth?.currentUser!.uid, 'numbers')), {
				number,
				createdAt: new Date().getTime()
			}
		);
	});

	return batch.commit();
}

export function deleteContact(id: string) {
	return deleteDoc(
		doc(db, 'contacts', auth?.currentUser!.uid, 'numbers', id)
	);
}

export function getContactsSnapshot(cb: (contacts: Contact[]) => void) {
	const q = query(
		collection(db, 'contacts', auth?.currentUser!.uid, 'numbers'),
		orderBy('createdAt', 'asc')
	);

	const unsubscribe = onSnapshot(q, querySnapshot => {
		const results: Contact[] = querySnapshot.docs.map(doc => {
			return {
				id: doc.id,
				number: doc.data().number as string,
			};
		});

		cb(results);
	});

	return unsubscribe;
}
