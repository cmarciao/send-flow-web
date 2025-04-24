import { cn } from '@/core/utils/cn';
import { ComponentProps } from 'react';

interface DividerProps extends ComponentProps<'div'> {
    text?: string;
};

export function Divider(props: DividerProps) {
    const { className, text, ...rest } = props;

    return (
        <div
            className={cn(
                'flex items-center',
                className
            )}
            {...rest}
        >
            <div className='h-[1px] bg-primary w-full'></div>
            {text && (
                <span className='mx-4 text-white'>or</span>
            )}
            <div className='h-[1px] bg-primary w-full'></div>
        </div>
    );
}
