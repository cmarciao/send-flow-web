import { useState } from 'react';

export function useSendMessageModal() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	function openModal() {
		setIsOpenModal(true);
	}

	function closeModal() {
		setIsOpenModal(false);
	}

	async function handleAddContact() {
		closeModal();
	}

	return {
		isOpenModal,
		openModal,
		closeModal,
		handleAddContact
	};
}
