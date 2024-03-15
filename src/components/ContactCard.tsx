import { MessageSquare } from 'lucide-react';
import formatPhone from '@/utils/formatPhone';
import Link from 'next/link';

type ContactCardProps = {
    number: string;
}

export function ContactCard({ number }: ContactCardProps) {
	return (
		<div
			className='bg-[#1a1a1a] p-4 rounded-md flex items-center justify-between'
		>
			<span>{formatPhone(number)}</span>

			<Link title='Send message' href={`/send-message/${number}`}>
				<MessageSquare color='white' />
			</Link>
		</div>
	);
}
