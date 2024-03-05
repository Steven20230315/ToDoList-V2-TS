// import {Form} from 'react-router-dom';
// import './css/AddTaskForm.module.css';
import style from './css/AddTaskForm.module.css';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';
import { useRef } from 'react';
import { type TaskInfo } from '../App';

type AddTaskFormProps = {
	onCancel: () => void;
	onAddTask: (task: TaskInfo) => void;
};

export default function AddTaskForm({ onCancel, onAddTask }: AddTaskFormProps) {
	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLInputElement>(null);

	const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const enteredTitle = titleRef.current!.value;
		const enteredDescription = descriptionRef.current!.value;
		// TODO: add component for select priority, label, date
		const defaultPriority = 'Medium';
		const defaultLabel = 'Personal';
		const defaultDate = new Date().toISOString().slice(0, 10);
		const taskId = Math.random();

		onAddTask({
			title: enteredTitle,
			description: enteredDescription,
			date: defaultDate,
			priority: defaultPriority,
			label: defaultLabel,
			id: taskId,
		});
		console.log('add task', enteredTitle, enteredDescription);
	};

	return (
		<form autoComplete='off' onSubmit={handleAddTask} className={style.add_task_form_container}>
			<div className={style.add_task_form_header}>
				<div className={style.add_task_form_input_container}>
					<input
						type='text'
						name='title'
						id='title'
						placeholder='Task name'
						ref={titleRef}
					/>
					<input
						type='text'
						name='description'
						id='description'
						placeholder='Description'
						ref={descriptionRef}
					/>
				</div>
				<div className={style.add_task_form_action_group}>
					<div>Date</div>
					<div>Priority</div>
					<div>Label</div>
				</div>
			</div>
			<div className={style.add_task_form_btn_container}>
				<CancelBtn onClick={onCancel} />
				<SubmitBtn text='Add task' />
			</div>
		</form>
	);
}
