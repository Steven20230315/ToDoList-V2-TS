import { ReactNode } from 'react';
import { TaskInfo } from './store/tasks_context';
import style from './css/TaskEditView.module.css';
import TaskDetail from './TaskDetails/TaskDetail';

type TaskEditViewProps = { task: TaskInfo; children?: ReactNode };

export default function TaskEditView({ task, children }: TaskEditViewProps) {
	return (
		<div className={style.task_details_container}>
			<div className={style.task_main_content}>
				<TaskDetail task={task} />
				<div>Comment Section</div>
			</div>
			<div className={style.task_details_sidebar}>
				<div>Task action group</div>
			</div>

			{children}
		</div>
	);
}
