import DataPicker from './DatePickerBtn';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import style from './css/SchedulerMenu.module.css';

export default function SchedulerMenu() {
	return (
		<div className={style.scheduler_container}>
			<header>
				<p>26 Mar</p>
			</header>
			<section>
				<button>Today</button>
				<button>Tomorrow</button>
				<button>This weekend</button>
				<button>Next Week</button>
				<button>No Date</button>
			</section>
			<section>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateCalendar sx={{ width: '100%', color: '#e4e4e4' }} />
				</LocalizationProvider>
			</section>
		</div>
	);
}
