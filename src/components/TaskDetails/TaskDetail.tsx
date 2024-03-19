import style from './css/TaskDetail.module.css';
import Checkbox from '../Checkbox';
import { useState } from 'react';
import { type TaskInfo, useTasksContext } from '../store/tasks_context';

type TaskDetailProps = { task: TaskInfo };

export default function TaskDetail({ task }: TaskDetailProps) {
	const [editAreaIsClicked, setEditAreaIsClicked] = useState(false);
	const { deleteTask } = useTasksContext();

	return (
		<div className={style.task_overview_container}>
			<div className={style.checkbox_container}>
				<Checkbox onDelete={() => deleteTask(task.id)} />
			</div>
			<div
				className={`${style.task_editor_area} ${
					editAreaIsClicked && style.editing
				}`}
			>
				{!editAreaIsClicked ? (
					<div onClick={() => setEditAreaIsClicked(true)}>
						<div className={style.task_editor_title}>
							<p>{task.title}</p>
						</div>
						<div className={style.task_editor_description}>
							<p>{task.description}</p>
						</div>
					</div>
				) : (
					<>
						{/* <form action='' className={style.task_editor_form} style={{display: 'flex', flexDirection: 'column'}}> */}
						<form action=''>
							<input
								type='text'
								placeholder={task.title}
								className={style.task_editor_title}
							/>
							<input
								type='text'
								placeholder={task.description}
								className={style.task_editor_description}
							/>
						</form>
					</>
				)}
			</div>
			{editAreaIsClicked && <div className={style.task_editor_btn_group}>
				<button
					onClick={() => setEditAreaIsClicked(false)}
					className='cancel_btn'
				>
					Cancel
				</button>
				<button className='submit_btn'>Save</button>
			</div>}
		</div>
	);
}
