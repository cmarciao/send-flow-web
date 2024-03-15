import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Send message',
	description: 'Send message to a contact.'
};


type SendMessageProps = {
    params: {
        number: string;
    }
}

export default function SendMessage({ params: { number } }: SendMessageProps) {
	return (
		<h1>Send message to {number}</h1>
	);
}
