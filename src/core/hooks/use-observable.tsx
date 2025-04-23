import { useState, useEffect } from "react";
import { Observable } from "rxjs";

export default function useObservable<T>(
    observable: () => Observable<T>,
    deps: any[] = [],
    initialState?: T,
): T | undefined {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const hasInvalidDependency = deps.some(it => !!it);

        if (hasInvalidDependency) return;

        const subscription = observable().subscribe(setState);

        return () => {
            subscription.unsubscribe();
            setState(initialState);
        };
    }, deps);

    return state;
}