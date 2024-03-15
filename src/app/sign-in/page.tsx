import { Metadata } from 'next';
import Link from 'next/link';
import { useSignIn } from './useSignIn';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';

export const metadata: Metadata = {
	title: 'Sign in',
	description: 'Sign in with an account',
};

export default function SignIn() {
	const { handleSignIn } = useSignIn();

	return (
		<main className='h-screen flex items-center justify-center'>
			<section className='text-center max-w-screen-sm w-full'>
				<h1>
					<span className='text-white'>Sign in</span> with an account
				</h1>

				<form className='mt-12 flex flex-col gap-4' action={handleSignIn}>
					<Input
						label='Email'
						type='email'
						placeholder='Your email'
						className='w-full'
						required
					/>
					<Input
						label='Password'
						type='password'
						placeholder='Your password'
						className='w-full'
						required
						minLength={6}
					/>

					<Button className='mt-8' type='submit'>
                        Sign In
					</Button>
				</form>

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
