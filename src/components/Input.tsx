import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
    label: string;
};

export function Input({ label, className, ...rest }: InputProps) {
	return (
		<div className='text-left'>
			<label htmlFor={label}>{label}</label>
			<input
				id={label}
				className={cn(
					'outline-none border-none text-gray-950 py-3 px-4 rounded-md',
					className
				)}
				{...rest}
			/>
		</div>
	);
}
