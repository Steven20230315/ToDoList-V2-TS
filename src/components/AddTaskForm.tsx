// import {Form} from 'react-router-dom';
// import './css/AddTaskForm.module.css';
import style from './css/AddTaskForm.module.css';
import CancelBtn from './CancelBtn';
import SubmitBtn from './SubmitBtn';
import { useRef, } from 'react';
type AddTaskFormProps = {
	onCancel: () => void;
};



export default function AddTaskForm({ onCancel }: AddTaskFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    console.log(inputRef.current);
    console.log(inputRef.current?.value);
    console.log(inputRef.current?.value);

	return (
		<form className={style.add_task_form_container}>
			<div className={style.add_task_form_header}>
				<div className={style.add_task_form_input_container}>
                    <input type='text' name='title' id='title' placeholder='Task name' ref={inputRef}
                    />
					<input
						type='text'
						name='description'
						id='description'
						placeholder='Description'
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
