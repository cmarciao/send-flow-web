import { cn } from '@/core/utils/cn';
import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
    label?: string;
};

export function Input(props: InputProps) {
    const { name, label, className, ...rest } = props;

    return (
        <div className='text-left w-full'>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                className={cn(
                    'outline-none border-none text-gray-950 py-3 px-4 rounded-md',
                    className
                )}
                name={name}
                {...rest}
            />
        </div>
    );
}
