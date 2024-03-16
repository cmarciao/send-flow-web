'use client';

import { XIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '../Button';
import { TextArea } from '../TextArea';

import { cn } from '@/utils/cn';
import { useSendMessageModal } from './useSendMessageModal';

export function SendMessageModal() {
	const {
		isOpenModal,
		openModal,
		closeModal,
		handleAddContact
	} = useSendMessageModal();

	return (
		<Dialog.Root open={isOpenModal}>
			<Dialog.Trigger
				className={cn(
					'bg-primary text-gray-950 font-bold uppercase py-3 px-4 rounded-md',
					'hover:brightness-75 transition-hover'
				)}
				onClick={openModal}
			>
                Send message
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-800 opacity-50" />
				<Dialog.Content className={cn(
					'z-50 bg-gray-900 rounded-md max-w-md w-full p-8 absolute mt-24 top-0 left-1/2 -translate-x-1/2'
				)}>
					<Dialog.Close
						asChild
						className='absolute right-4 top-4'
						onClick={closeModal}
					>
						<button>
							<XIcon color='white' />
						</button>
					</Dialog.Close>

					<Dialog.Title>Send message</Dialog.Title>

					<form className='mt-12 flex flex-col gap-4' action={handleAddContact}>
						<TextArea
							label='Message'
							id='message'
							name='message'
							placeholder='Your message'
							className='w-full min-h-32'
							required
						/>

						<Button className='mt-8' type='submit'>
                            Send
						</Button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
