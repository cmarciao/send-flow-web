'use client';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import { useSignUpForm } from './useSignUpForm';

export function SignUpForm() {
	const { handleSignUp } = useSignUpForm();

	return (
		<form className='mt-12 flex flex-col gap-4' method='POST' action={handleSignUp}>
			<Input
				label='Email'
				id='email'
				name='email'
				type='text'
				autoComplete='off'
				placeholder='Your email'
				className='w-full'
				required
			/>

			<Input
				label='Password'
				id='password'
				name='password'
				type='password'
				autoComplete='off'
				placeholder='Your password'
				className='w-full'
				required
				minLength={6}
			/>

			<Button className='mt-8' type='submit'>
                Sign up
			</Button>
		</form>
	);
}
