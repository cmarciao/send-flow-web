import { cn } from '@/core/utils/cn';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> { }

export function Button(props: ButtonProps) {
    const { children, className, ...rest } = props;

    return (
        <button
            className={cn(
                'bg-primary text-gray-950 font-bold uppercase py-3 px-4 rounded-md',
                'hover:brightness-75 transition-hover',
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}
