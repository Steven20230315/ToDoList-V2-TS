import { PropsWithChildren, useState } from 'react';
import IconBtn from './IconBtn';
import { RxCross2 } from 'react-icons/rx';
// import ReactDOM from 'react-dom';

type ModalProps = {
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

export default function Modal({ onClose, children }: ModalProps) {
	const handleCloseModal = (event: React.MouseEvent) => {
		event.stopPropagation();
		onClose();
	};
	return (
		<>
			<div className='modal_overlay' onClick={handleCloseModal}></div>
			<div className='modal'>
				{/* <IconBtn text='' onClick={handleCloseModal} icon={<RxCross2 />} /> */}
				<button onClick={handleCloseModal} className='modal_close_btn'>
					<RxCross2 />
				</button>
				{children}
			</div>
		</>
	);
}
