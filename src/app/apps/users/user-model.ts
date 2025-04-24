import { authUser } from "@/core/firebase/auth";
import { useBehavior } from "@/core/hooks/use-behavior";
import { createBehavior } from "@/core/rxjs/create-behavior";

export const currentUser$ = createBehavior(authUser);

export const useCurrentUser = () => useBehavior(currentUser$);
