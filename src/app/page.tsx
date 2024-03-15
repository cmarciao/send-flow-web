import { Metadata } from 'next';
import Link from 'next/link';
import { LogOut, Info } from 'lucide-react';

import { AddContactModal } from '@/components/AddContactModal';
import { cn } from '@/utils/cn';
import { Contact } from '@/types/Contact';
import { ContactCard } from '@/components/ContactCard';

export const metadata: Metadata = {
	title: 'My contacts',
	description: 'Contacts list'
};

const contacts: Contact[] = new Array(10).fill(0).map((_, index) => ({
	id: index,
	number: `${index + 9999999999}`
}));

export default function Home() {
	return (
		<main className="flex justify-center mt-24">
			<section className='max-w-screen-md w-full'>
				<button>
					<Link href={'/sign-in'}>
						<LogOut color='white' />
					</Link>
				</button>

				<header className='text-center'>
					<h1>My Contacts</h1>
				</header>

				<section className={
					cn(
						'flex flex-col items-center justify-between mt-8 text-center',
						'sm:flex-row'
					)
				}>
					<h2 className={
						cn(
							'text-white mb-4',
							'sm:mb-0'
						)
					}>
                        You have {contacts.length} {contacts.length === 1 ? ' contact' : ' contacts'}
					</h2>

					<AddContactModal />
				</section>

				<div className='flex flex-col gap-4 mt-8'>
					{contacts.length > 0 && contacts.map((contact) => (
						<ContactCard
							key={contact.id}
							number={contact.number}
						/>
					))}

					{contacts.length === 0 && (
						<div className='flex flex-col justify-center items-center mt-16'>
							<Info color='#ee3939' size={100}/>
							<h2 className='text-center mt-4 text-white'>
                                Your contact list is empty, add new contacts to send messages to.
							</h2>
						</div>
					)}
				</div>
			</section>
		</main>
	);
}
