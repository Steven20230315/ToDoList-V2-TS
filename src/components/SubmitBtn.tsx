type SubmitBtnProps = {
	text: string;
	className?: string;
	disabled?: boolean;
};

export default function SubmitBtn({ text, disabled }: SubmitBtnProps) {
	return (
		<button
			role='submit'
			type='submit'
			className='submit_btn'
			disabled={disabled}
		>
			{text}
		</button>
	);
}
