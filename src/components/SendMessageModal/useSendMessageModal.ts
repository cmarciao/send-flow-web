import { useState } from 'react';
import toast from 'react-hot-toast';

import { sendMessage } from '@/services/messages';

export function useSendMessageModal() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	function openModal() {
		setIsOpenModal(true);
	}

	function closeModal() {
		setIsOpenModal(false);
	}

	async function handleAddContact(formData: FormData) {
		try {
			const message = formData.get('message')!.toString();

			await sendMessage(message);

			toast.success('Message sent successfully.');

			closeModal();
		} catch(e) {
			const error = e as Error;
			toast.error(error.message);
		}
	}

	return {
		isOpenModal,
		openModal,
		closeModal,
		handleAddContact
	};
}
