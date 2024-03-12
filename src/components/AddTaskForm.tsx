// import {Form} from 'react-router-dom';
// import './css/AddTaskForm.module.css';
import style from './css/AddTaskForm.module.css';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';
import { useState, useRef } from 'react';
import Input from './Input';
import Form, { FormHandler } from './Form';
import DataPickerBtn from './DatePickerBtn';
import IconBtn from './IconBtn';
import {
	useTasksContext,
	type TaskInfo,
} from '../components/store/tasks_context';

export default function AddTaskForm() {
	const formRef = useRef<FormHandler>(null);
	const { addTask } = useTasksContext();
	const [openForm, setOpenForm] = useState(false);
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
		addTask(data);
		formRef.current?.clear();
		setOpenForm(false);
	};



	if (!openForm) return <IconBtn onClick={() => setOpenForm(true)} />;
	return (
		<Form
			autoComplete='off'
			onSave={handleSave}
			className={style.add_task_form_container}
			ref={formRef}
		>
			<div className={style.add_task_form_header}>
				<div className={style.add_task_form_input_container}>


					<Input type='text' id='title' placeholder='Task name' />
					<Input type='text' id='description' placeholder='Description' />
				</div>
				<div className={style.add_task_form_action_group}>
					<DataPickerBtn />
					<div>Priority</div>
					<div>Label</div>
				</div>
			</div>
			<div className={style.add_task_form_btn_container}>
				<CancelBtn onClick={() => setOpenForm(false)} />

				<SubmitBtn text='Add task' />
			</div>
		</Form>
	);
}
