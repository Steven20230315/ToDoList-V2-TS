type SubmitBtnProps = {
	text: string;
	className?: string;
};

export default function SubmitBtn({ text }: SubmitBtnProps) {
	return (
		<button role='submit' type='submit' className='submit_btn'>
			{text}
		</button>
	);
}
