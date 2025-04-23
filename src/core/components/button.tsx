import { cn } from '@/core/utils/cn';
import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export function Button({ children, className, ...rest }: ButtonProps) {
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
