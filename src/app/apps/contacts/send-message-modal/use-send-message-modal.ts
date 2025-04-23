import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

import { sendMessage } from '@/app/apps/messages/messages';

export function useSendMessageModal() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    function openModal() {
        setIsOpenModal(true);
    }

    function closeModal() {
        setIsOpenModal(false);
    }

    async function handleAddContact(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const message = formData.get('message')!.toString();

        try {
            await sendMessage(message);

            toast.success('Message sent successfully.');

            closeModal();
        } catch (e) {
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
