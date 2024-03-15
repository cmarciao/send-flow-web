import formatPhone from '@/utils/formatPhone';

type ContactCardProps = {
    number: string;
}

export function ContactCard({ number }: ContactCardProps) {
	return (
		<div
			className='bg-[#1a1a1a] p-4 rounded-md flex items-center justify-between'
		>
			<span>{formatPhone(number)}</span>
		</div>
	);
}
