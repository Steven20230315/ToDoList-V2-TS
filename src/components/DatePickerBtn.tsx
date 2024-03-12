import { useState } from 'react';
import SchedulerMenu from './SchedulerMenu';
import style from './css/DatePickerBtn.module.css';

export default function DataPickerBtn() {
  const [open, setOpen] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
  }

	return (
		<button onClick={handleClick} className={style.date_picker_btn}>
			Date
			{open ? <SchedulerMenu /> : ''}
		</button>
	);
}
