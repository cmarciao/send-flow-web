import { useState, useEffect } from "react";
import { finalize, Observable, tap } from "rxjs";

export default function useObservable<T>(
    observable: () => Observable<T>,
    deps: any[],
    initialState: T
): [T, boolean];
export default function useObservable<T>(
    observable: () => Observable<T>,
    deps: any[] = [],
    initialState?: T,
): [T | undefined, boolean] {
    const [state, setState] = useState(initialState);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const hasInvalidDependency = deps.every(it => !!it);

        if (!hasInvalidDependency) return;

        const subscription = observable()
            .pipe(
                tap(() => setIsLoading(false))
            )
            .subscribe(setState);

        return () => {
            subscription.unsubscribe();
            setState(initialState);
            setIsLoading(true);
        };
    }, deps);

    return [state, isLoading];
}