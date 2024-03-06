// import {Form} from 'react-router-dom';
// import './css/AddTaskForm.module.css';
import style from './css/AddTaskForm.module.css';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';
import { useState, useEffect, useRef } from 'react';
import { type TaskInfo } from '../App';
import Input from './Input';
import Form, { FormHandler } from './Form';

type AddTaskFormProps = {
	onCancel: () => void;
	onAddTask: (task: TaskInfo) => void;
};

export default function AddTaskForm({ onCancel, onAddTask }: AddTaskFormProps) {
	const formRef = useRef<FormHandler>(null);

	const [isDataComplete, setIsDataComplete] = useState(false);
	const handleSave = (value: unknown) => {
		type FormData = {
			title: string;
			description: string;
		};

		const defaultPriority = 'Medium';
		const defaultLabel = 'Personal';
		const defaultDate = new Date().toISOString().slice(0, 10);
		const taskId = Math.random();

		const data: TaskInfo = {
			...(value as FormData),
			priority: defaultPriority,
			label: defaultLabel,
			date: defaultDate,
			id: taskId,
		};
		formRef.current?.clear();
		onAddTask(data);
	};

	// title and description are required. If they are empty, set isDataComplete to false which will disable the submit button
	// Initially, I want to avoid using useState and onChange to control the input field. So I use useRef to access the value of the input field. But I want to disable the submit button when the input field is empty. This involved rendering the submit button conditionally with disabled property based on the input field. useRef can't trigger a re-render. Even combined with useEffect, it can't trigger a re-render. (A least for me)
	// https://react.dev/reference/react/useRef React useRef documentation
	// useEffect(() => {
	// 	if (enteredTitle && enteredDescription) {
	// 		setIsDataComplete(true);
	// 	}
	// }, [enteredTitle, enteredDescription]);

	// const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();

	// 	// TODO: add component for select priority, label, date
	// 	const defaultPriority = 'Medium';
	// 	const defaultLabel = 'Personal';
	// 	const defaultDate = new Date().toISOString().slice(0, 10);
	// 	const taskId = Math.random();

	// 	onAddTask({
	// 		title: enteredTitle,
	// 		description: enteredDescription,
	// 		date: defaultDate,
	// 		priority: defaultPriority,
	// 		label: defaultLabel,
	// 		id: taskId,
	// 	});
	// 	// Don't need to clear form here. Since when the form is submitted, AddTaskForm is unmounted.
	// };

	return (
		<Form
			autoComplete='off'
			onSave={handleSave}
			className={style.add_task_form_container}
		>
			<div className={style.add_task_form_header}>
				<div className={style.add_task_form_input_container}>
					{/* <input
						type='text'
						name='title'
						id='title'
						placeholder='Task name'
						value={enteredTitle}
						onChange={handleInputChange}
					/> */}

					<Input type='text' id='title' placeholder='Task name' />
					<Input type='text' id='description' placeholder='Description' />
				</div>
				<div className={style.add_task_form_action_group}>
					<div>Date</div>
					<div>Priority</div>
					<div>Label</div>
				</div>
			</div>
			<div className={style.add_task_form_btn_container}>
				<CancelBtn onClick={onCancel} />

				{/* <SubmitBtn text='Add task' disabled={!isDataComplete} /> */}
				<SubmitBtn text='Add task' />
			</div>
		</Form>
	);
}
