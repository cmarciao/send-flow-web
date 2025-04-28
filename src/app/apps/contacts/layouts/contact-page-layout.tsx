import { PropsWithChildren } from "react";
import { LogOut } from "lucide-react";
import { PageInformations } from "@/app/components";
import { handleSignOut } from "../../auth/auth-facade";

export function ContactPageLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <main className="flex justify-center mt-24 mb-8">
            <PageInformations
                title='Contacts'
                description='Contacts list'
            />

            <section className='max-w-screen-md w-full'>
                <button onClick={handleSignOut}>
                    <LogOut color='white' />
                </button>

                <header className='text-center'>
                    <h1>My Contacts</h1>
                </header>

                {children}
            </section>
        </main>
    )
}
