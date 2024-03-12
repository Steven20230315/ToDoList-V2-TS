import { PropsWithChildren, useState } from 'react';
// import ReactDOM from 'react-dom';

type ModalProps = {
	open: boolean;
	onClose: () => void;
} & PropsWithChildren;

// export default function Modal({ open, onClose, children }: ModalProps) {
// 	if (!open) return null;
// 	return ReactDOM.createPortal(
// 		<>
// 			<div className='modal-overlay' onClick={onClose}>
// 				<button>Open</button>
// 			</div>
// 			<div className='modal'>
// 				<button onClick={onClose}>Close</button>
// 				{children}
// 			</div>
// 		</>,
// 		document.getElementById('modal-root')!
// 	);
// }

export default function Modal({ open, onClose, children }: ModalProps) {
	const handleCLoseModal = (event: React.MouseEvent) => {
		event.stopPropagation(); // Prevent event propagation to the parent elements
		setIsOpen(false);
	};

	const [isOpen, setIsOpen] = useState(open);
	if (!isOpen) return null;
	return (
		<>
			<div className='modal_overlay' onClick={handleCLoseModal}>
				<button>Open</button>
			</div>
			<div className='modal'>
				<button onClick={handleCLoseModal}>Close</button>
				{children}
			</div>
		</>
	);
}
