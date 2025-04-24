'use client';

import { XIcon, Minus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

import { cn } from '@/core/utils/cn';
import { Button, Input } from '@components'

import { useAddContactModal } from './use-add-contact-modal';

export default function AddContactModal() {
    const {
        contacts,
        isOpenModal,
        openModal,
        closeModal,
        updateContact,
        handleAddContact,
        handleAddContactToList,
        handleRemoveContact
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
                <Dialog.Content
                    className={cn(
                        'z-50 bg-gray-900 rounded-md max-w-md w-full p-8 absolute mt-24 top-0 left-1/2 -translate-x-1/2'
                    )}
                >
                    <Dialog.Close
                        asChild
                        className='absolute right-4 top-4'
                        onClick={closeModal}
                    >
                        <button>
                            <XIcon color='white' />
                        </button>
                    </Dialog.Close>

                    <Dialog.Title>Add contacts</Dialog.Title>
                    <Dialog.Description></Dialog.Description>

                    <div className='flex flex-col mt-12'>
                        <Button className='self-end' onClick={handleAddContactToList}>
                            Add item
                        </Button>

                        <form className='mt-8 flex flex-col gap-4 max-h-[50rem] overflow-scroll' onSubmit={handleAddContact}>
                            <h3>Numbers</h3>

                            {contacts.map((contact) => (
                                <div key={contact.id} className='flex items-center gap-4'>
                                    <Input
                                        className='w-full'
                                        type='number'
                                        id={`number-${contact.id}`}
                                        name={`number-${contact.id}`}
                                        placeholder='Contact number'
                                        value={contact.number}
                                        onChange={(e) => updateContact(contact.id, e.target.value)}
                                        min={0}
                                        required
                                    />

                                    <Button
                                        className='p-0 bg-transparent text-primary'
                                        onClick={() => handleRemoveContact(contact.id)}
                                    >
                                        <Minus />
                                    </Button>
                                </div>
                            ))}

                            <Button className='mt-8' type='submit'>
                                Add
                            </Button>
                        </form>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
