import { PropsWithChildren } from 'react';
import { type TaskInfo } from '../App';

type TasksHolderProps = PropsWithChildren<{
	tasks: TaskInfo[];
}>;
export default function TasksHolder({ tasks, children }: TasksHolderProps) {
	return (
		<div>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<div>{task.title}</div>
						<div>{task.description}</div>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
}
