// import {Form} from 'react-router-dom';
// import './css/AddTaskForm.module.css';
import style from './css/AddTaskForm.module.css';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';
import { useState, useRef } from 'react';
import Input from './Input';
import Form, { FormHandler } from './Form';
import { v4 as uuidv4 } from 'uuid';
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
		const data: TaskInfo = {
			...(value as TaskInfo),
			id: uuidv4(),
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
					{/* <DataPickerBtn /> */}
					<input type='date' name='' id='' />
					<select name='priority' id='priority'>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
					</select>
					<select name='label' id='label'>
						<option value='Personal'>Personal</option>
						<option value='Work'>Work</option>
						<option value='Study'>Study</option>
					</select>
				</div>
			</div>
			<div className={style.add_task_form_btn_container}>
				<CancelBtn onClick={() => setOpenForm(false)} />

				<SubmitBtn text='Add task' />
			</div>
		</Form>
	);
}
