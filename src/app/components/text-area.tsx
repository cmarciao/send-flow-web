import { ComponentProps } from 'react';
import { cn } from '@/core/utils/cn';

interface TextAreaProps extends ComponentProps<'textarea'> {
    label: string;
};

export function TextArea(props: TextAreaProps) {
    const { name, label, className, ...rest } = props;

    return (
        <div className='text-left'>
            <label htmlFor={name}>{label}</label>
            <textarea
                className={cn(
                    'resize-none hover:resize-y',
                    'outline-none border-none text-gray-950 py-3 px-4 rounded-md',
                    className
                )}
                name={name}
                {...rest}
            ></textarea>
        </div>
    );
}
