import { Link } from 'react-router';
import { Divider } from '@/components/Divider';
import { SignUpForm } from './components/SignUpForm';
import { APP_ROUTES } from '@/routes/app-routes';
import { Title } from '@/components/page-title';

export default function SignUp() {
    return (
        <main className='h-screen flex items-center justify-center'>
            <Title
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
