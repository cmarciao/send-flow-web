'use client';

import { XIcon } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';
import { Button } from '../Button';
import { Input } from '../Input';
import { useAddContactModal } from './useAddContactModal';

export function AddContactModal() {
	const {
		isOpenModal,
		openModal,
		closeModal,
		handleAddContact
	} = useAddContactModal();

	return (
		<Dialog.Root open={isOpenModal}>
			<Dialog.Trigger
				className={cn(
					'bg-primary text-gray-950 font-bold uppercase py-3 px-4 rounded-md',
					'hover:brightness-75 transition-hover'
				)}
				onClick={openModal}
			>
                Add contact
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-gray-800 opacity-50" />
				<Dialog.Content className={cn(
					'z-50 bg-gray-900 rounded-md max-w-md w-full p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
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

					<Dialog.Title>Add contact</Dialog.Title>

					<form className='mt-12 flex flex-col gap-4' action={handleAddContact}>
						<Input
							label='Number'
							type='number'
							placeholder='Contact number'
							className='w-full'
							min={0}
							required
						/>

						<Button className='mt-8' type='submit'>
                            Add
						</Button>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
