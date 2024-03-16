import { Metadata } from 'next';
import Link from 'next/link';

import { Divider } from '@/components/Divider';
import { SignInForm } from './components/SignInForm';

export const metadata: Metadata = {
	title: 'Sign in',
	description: 'Sign in with an account',
};

export default function SignIn() {
	return (
		<main className='h-screen flex items-center justify-center'>
			<section className='text-center max-w-screen-sm w-full'>
				<h1>
					<span className='text-white'>Sign in</span> with an account
				</h1>

				<SignInForm />

				<Divider
					text='or'
					className='mt-8'
				/>

				<div className='mt-8'>
					<span className='text-white'>New for here?</span> &nbsp;
					<Link href={'/sign-up'}>
                        Create your account.
					</Link>
				</div>
			</section>
		</main>
	);
}
