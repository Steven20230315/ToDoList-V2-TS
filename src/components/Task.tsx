import { type TaskInfo } from './store/tasks_context';
import style from './css/Task.module.css';
import TaskCheckbox from './Checkbox';
import { useState } from 'react';
import Modal from './Modal';
import TaskEditView from './TaskEditView';
type TaskProps = {
	onDelete?: () => void;
	task: TaskInfo;
};

export default function Task({ task, onDelete }: TaskProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<li className={style.task} onClick={() => setIsModalOpen(true)}>
				<TaskCheckbox onDelete={onDelete} />
				<h4>{task.title}</h4>
				<p>{task.description}</p>
				{/* {isModalOpen && <Modal open={isModalOpen} onClose={() => closeModal} />} */}
				{isModalOpen && (
					<Modal onClose={() => setIsModalOpen(false)}>
						<TaskEditView task={task} />
					</Modal>
				)}
			</li>
		</>
	);
}
