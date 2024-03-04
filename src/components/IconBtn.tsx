// TODO: consider adding props for styling (if it accept className, then user can have complete control over styling, another )

import style from './css/IconBtn.module.css';
import { LuPlus } from 'react-icons/lu';
type IconBtnProps = {
	// text is optional. Default value is 'Add task'
	text?: string;
	onClick?: () => void;
};

export default function IconBtn({ text = 'Add task', onClick }: IconBtnProps) {
	return (
		<button className={style.add_task_btn} onClick={onClick}>
			<span className={style.add_task_btn_icon_circle}>
				<LuPlus className={style.add_task_btn_icon} />
			</span>
			{text}
		</button>
	);
}
