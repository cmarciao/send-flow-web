import { PropsWithChildren } from "react";
import { useCurrentUser } from "@/app/apps/users/user-model";
import { Spinner } from "@/app/components";

export const Authorization = (props: PropsWithChildren<{}>) => {
    const { children } = props;

    const user = useCurrentUser();

    if (user === undefined) {
        return (
            <div className='h-screen flex items-center justify-center'>
                <Spinner />
            </div>
        );
    }

    return children;
};
