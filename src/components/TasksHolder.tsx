import style from './css/TasksHolder.module.css';
import Tasks from './Tasks';
import { useTasksContext } from '../components/store/tasks_context';
import { PropsWithChildren } from 'react';
export default function TasksHolder({ children }: PropsWithChildren) {
	const { tasks: contextTasks } = useTasksContext();
	console.log('tasks', contextTasks);
	return (
		<div className={style.task_holder_container}>
			{children}
			<hr />
			<Tasks />
		</div>
	);
}
