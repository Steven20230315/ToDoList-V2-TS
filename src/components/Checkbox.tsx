import { IoCheckmark } from 'react-icons/io5';
import { useState } from 'react';
import style from './css/Checkbox.module.css';

type CheckboxProps = {
	onDelete?: () => void;
};

export default function TaskCheckbox({ onDelete }: CheckboxProps) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<button
			className={style.checkbox}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onDelete}
		>
			<span className={style.checkbox_circle}>
				{/* { isHovered ? <IoCheckmark /> : '' } */}
				<IoCheckmark className={isHovered ? '' : 'hidden'} />
			</span>
		</button>
	);
}
