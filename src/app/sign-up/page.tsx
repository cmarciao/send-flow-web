import { Metadata } from 'next';
import Link from 'next/link';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';

import { useSignUp } from './useSignUp';

export const metadata: Metadata = {
	title: 'Sign up',
	description: 'Create your account.',
};

export default function SignUp() {
	const { handleSignUp } = useSignUp();

	return (
		<main className='h-screen flex items-center justify-center'>
			<section className='text-center max-w-screen-sm w-full'>
				<h1>
					<span className='text-white'>Create</span> your account
				</h1>

				<form className='mt-12 flex flex-col gap-4' action={handleSignUp}>
					<Input
						label='Email'
						type='text'
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
                        Sign up
					</Button>
				</form>

				<Divider
					text='or'
					className='mt-8'
				/>

				<div className='mt-8'>
					<span className='text-white'>Already have an account?</span> &nbsp;
					<Link href={'/sign-in'}>
                        Sign in here.
					</Link>
				</div>
			</section>
		</main>
	);
}
