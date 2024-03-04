type SubmitBtnProps = {
	text: string;
	className?: string;
};

export default function SubmitBtn({ text }: SubmitBtnProps) {
	const handleSubmit = (event: React.MouseEvent) => {
		event.preventDefault();
	};

	return (
		<button role='button' className='submit_btn' onClick={handleSubmit}>
			{text}
		</button>
	);
}
