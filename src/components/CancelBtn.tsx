type CancelBtnProps = {
	text?: string;
	className?: string;
	onClick?: () => void;
};

export default function CancelBtn({
	text = 'Cancel',
	onClick,
}: CancelBtnProps) {

    const handleCancel = (event: React.MouseEvent) => {
        event.preventDefault();
        // otherwise, the button will submit the form and reload the page
        onClick?.();
    }

	return (
		<button role='cancel' className='cancel_btn' onClick={handleCancel}>
			{text}
		</button>
	);
}
