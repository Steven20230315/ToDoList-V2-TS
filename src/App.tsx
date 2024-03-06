import { useState } from 'react';
import IconBtn from './components/IconBtn';
import AddTaskForm from './components/AddTaskForm';
import TasksHolder from './components/TasksHolder';
import SidebarContainer from './components/SidebarContainer';
import LoginForm from './components/LoginForm';
export type TaskInfo = {
	id: number;
	title: string;
	description: string;
	date: string;
	priority: string;
	label: string;
};

function App() {
	const [isClicked, setIsClicked] = useState(false);
	const [tasks, setTasks] = useState<TaskInfo[]>([]);

	const handleAddTask = (task: TaskInfo) => {
		setTasks([...tasks, task]);
		console.log('add task', task);
		setIsClicked(false);
	};

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	const handleCancel = () => {
		setIsClicked(false);
		console.log('cancel');
	};

	return (
		<>
			<div>
				<SidebarContainer></SidebarContainer>
			</div>

			<div className='main-content-container'>
				<LoginForm />
				<TasksHolder tasks={tasks} />
				{isClicked ? null : <IconBtn onClick={handleClick} />}
				{isClicked ? (
					<AddTaskForm onCancel={handleCancel} onAddTask={handleAddTask} />
				) : null}
			</div>
		</>
	);
}

export default App;
