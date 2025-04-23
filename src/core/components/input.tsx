import { cn } from '@/core/utils/cn';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
	label?: string;
};

export function Input({ name, label, className, ...rest }: InputProps) {
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
