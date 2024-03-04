import { useState } from 'react';
import IconBtn from './components/IconBtn';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

type TaskInfo = {
	id: number;
	name: string;
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
			{isClicked ? null : <IconBtn onClick={handleClick} />}
			{isClicked ? <AddTaskForm onCancel={handleCancel} /> : null}
		</>
	);
}

export default App;
