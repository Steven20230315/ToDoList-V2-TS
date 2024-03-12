import Task from './Task';
import { useTasksContext } from './store/tasks_context';

export default function Tasks() {
    const {tasks, deleteTask} = useTasksContext();
	return (
		<ul>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDelete={()=> deleteTask(task.id)} />
			))}
		</ul>
	);
}
