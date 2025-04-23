import { Input, Button } from '@/components';
import { useSignInForm } from './use-sign-in-form';

export function SignInForm() {
    const { handleSignIn } = useSignInForm();

    return (
        <form className='mt-12 flex flex-col gap-4' method='POST' onSubmit={handleSignIn}>
            <Input
                label='Email'
                type='email'
                name='email'
                id='email'
                placeholder='Your email'
                className='w-full'
                required
            />

            <Input
                label='Password'
                type='password'
                name='password'
                id='password'
                autoComplete='off'
                placeholder='Your password'
                className='w-full'
                required
                minLength={6}
            />

            <Button className='mt-8' type='submit'>
                Sign In
            </Button>
        </form>
    );
}
