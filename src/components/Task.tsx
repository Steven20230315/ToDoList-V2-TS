import { type TaskInfo } from './store/tasks_context';
import style from './css/Task.module.css';
import TaskCheckbox from './Checkbox';
import { useState } from 'react';
import Modal from './Modal';
type TaskProps = {
	onDelete?: () => void;
	task: TaskInfo;
};

export default function Task({ task, onDelete }: TaskProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const closeModal = (event: React.MouseEvent) => {
		event.stopPropagation(); // Prevent event propagation to the parent elements
		setIsModalOpen(false);
	};
	return (
		<li className={style.task} onClick={() => setIsModalOpen(true)}>
			<TaskCheckbox onDelete={onDelete} />
			<h4>{task.title}</h4>
			<p>{task.description}</p>
			{isModalOpen && <Modal open={isModalOpen} onClose={() => closeModal} />}
			{isModalOpen && (
				<Modal open={isModalOpen} onClose={() => closeModal}>
					<p>Are you sure you want to delete this task?</p>
					<h4>{task.title}</h4>
					<p>{task.description}</p>
				</Modal>
			)}
		</li>
	);
}
