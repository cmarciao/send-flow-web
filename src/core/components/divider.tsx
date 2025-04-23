import { cn } from '@/core/utils/cn';
import { ComponentProps } from 'react';

type DividerProps = ComponentProps<'div'> & {
	text?: string;
};

export function Divider({ className, text, ...rest }: DividerProps) {
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
