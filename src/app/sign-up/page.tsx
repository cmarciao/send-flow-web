import { Metadata } from 'next';
import Link from 'next/link';

import { Divider } from '@/components/Divider';
import { SignUpForm } from './components/SignUpForm';
import { APP_ROUTES } from '@/constants/app-routes';

export const metadata: Metadata = {
	title: 'Sign up',
	description: 'Create your account.',
};

export default function SignUp() {
	return (
		<main className='h-screen flex items-center justify-center'>
			<section className='text-center max-w-screen-sm w-full'>
				<h1>
					<span className='text-white'>Create</span> your account
				</h1>

				<SignUpForm />

				<Divider
					text='or'
					className='mt-8'
				/>

				<div className='mt-8'>
					<span className='text-white'>Already have an account?</span> &nbsp;
					<Link href={APP_ROUTES.public.signIn}>
                        Sign in here.
					</Link>
				</div>
			</section>
		</main>
	);
}
