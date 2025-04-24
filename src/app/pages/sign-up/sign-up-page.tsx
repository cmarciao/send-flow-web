import { Link } from 'react-router';
import { Divider, PageInformations } from '@/app/components';
import SignUpForm from './sign-up-form';
import { APP_ROUTES } from '@/app/configs/app-routes';

export default function SignUpPage() {
    return (
        <main className='h-screen flex items-center justify-center'>
            <PageInformations
                title='Sign up'
                description='Create your account.'
            />

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
                    <Link to={APP_ROUTES.public.signIn}>
                        Sign in here.
                    </Link>
                </div>
            </section>
        </main>
    );
}
