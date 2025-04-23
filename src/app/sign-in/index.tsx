import { Link } from 'react-router';
import { Divider } from '@/components/Divider';
import { SignInForm } from './components/SignInForm';
import { APP_ROUTES } from '@/routes/app-routes';
import { Title } from '@/components/page-title';

export default function SignIn() {
    return (
        <main className='h-screen flex items-center justify-center'>
            <Title
                title='Sign in'
                description='Sign in with an account'
            />

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
                    <Link to={APP_ROUTES.public.signUp}>
                        Create your account.
                    </Link>
                </div>
            </section>
        </main>
    );
}
