import { Navigate, Outlet } from "react-router";
import { APP_ROUTES } from "@/app/configs/app-routes";
import { useCurrentUser } from "../apps/users/user-model";

interface GuardRoutesProps {
    isPrivate?: boolean;
}

export function GuardRoutes(props: GuardRoutesProps) {
    const { isPrivate = false } = props;

    const user = useCurrentUser();

    if (isPrivate && !user) {
        return <Navigate to={APP_ROUTES.public.signIn} />
    } else if (!isPrivate && user) {
        return <Navigate to={APP_ROUTES.private.home} />
    }

    return <Outlet />
}
