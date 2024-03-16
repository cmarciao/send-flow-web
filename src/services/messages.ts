import { auth, db } from '@/libs/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

type Contact = {
    id: string;
    number: string;
}

export async function sendMessage(message: string) {
	const contacts: Contact[] = [];

	const querySnapshot = await getDocs(collection(db, 'contacts', auth.currentUser!.uid, 'numbers'));
	querySnapshot.forEach((doc) => {
		contacts.push({
			id: doc.id,
			number: `${doc.data().number}`
		});
	});

	if(contacts.length === 0) throw new Error('No contact to send a message to.');

	return addDoc(collection(db, 'messages', auth.currentUser!.uid, 'messages'), {
		message,
		contacts
	});
}
