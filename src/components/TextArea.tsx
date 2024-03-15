import { ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type TextAreaProps = ComponentProps<'textarea'> & {
    label: string;
};

export function TextArea({ label, className, ...rest }: TextAreaProps) {
	return (
		<div className='text-left'>
			<label htmlFor={label}>{label}</label>
			<textarea
				id={label}
				className={cn(
					'resize-none hover:resize-y',
					'outline-none border-none text-gray-950 py-3 px-4 rounded-md',
					className
				)}
				{...rest}
			></textarea>
		</div>
	);
}
