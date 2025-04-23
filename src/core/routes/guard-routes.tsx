import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/core/hooks/use-auth"
import { APP_ROUTES } from "@/core/routes/app-routes";

type GuardRoutesProps = {
    isPrivate?: boolean;
}

export function GuardRoutes({ isPrivate = false }: GuardRoutesProps) {
    const { user } = useAuth();

    if (isPrivate && !user) {
        return <Navigate to={APP_ROUTES.public.signIn} />
    } else if (!isPrivate && user) {
        return <Navigate to={APP_ROUTES.private.home} />
    }

    return <Outlet />
}
