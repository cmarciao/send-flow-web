import { useState } from 'react';
import toast from 'react-hot-toast';

import { addContact } from '@/services/contacts';
import { Contact } from '@/types/Contact';

export function useAddContactModal() {
	const [contacts, setContacts] = useState<Contact[]>([{
		id: '0',
		number: ''
	}]);
	const [isOpenModal, setIsOpenModal] = useState(false);

	function openModal() {
		setIsOpenModal(true);
	}

	function closeModal() {
		setContacts([{
			id: '0',
			number: ''
		}]);
		setIsOpenModal(false);
	}

	function updateContact(id: string, number: string) {
		setContacts(prevState => {
			return prevState.map((contact) => {
				if(id !== contact.id) return contact;

				return {
					...contact,
					number
				};
			});
		});
	}

	function handleAddContactToList() {
		const lastContactId = contacts[contacts.length -1 ].id;

		setContacts(prevState => [...prevState, {
			id: `${Number(lastContactId) + 1}`,
			number: ''
		}]);
	}

	async function handleRemoveContact(id: string) {
		if(contacts.length === 1) return;

		setContacts(prevState =>
			prevState.filter(contact => contact.id !== id)
		);
	}

	async function handleAddContact() {
		const numbers = contacts.map(contact => contact.number);

		try {
			await addContact(numbers);

			closeModal();

			toast.success('Number added successfully.');
		} catch(e) {
			console.log(e);
			toast.error('Something went wrong, try again.');
		}

	}

	return {
		contacts,
		isOpenModal,
		openModal,
		closeModal,
		updateContact,
		handleAddContact,
		handleAddContactToList,
		handleRemoveContact
	};
}
