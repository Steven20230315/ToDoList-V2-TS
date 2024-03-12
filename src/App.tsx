import AddTaskForm from './components/AddTaskForm';
import TasksHolder from './components/TasksHolder';
import SidebarContainer from './components/SidebarContainer';
import LoginForm from './components/LoginForm';
import TasksContextProvider from './components/store/tasks_context';
function App() {
	return (
		<TasksContextProvider>
			<div>
				<SidebarContainer></SidebarContainer>
			</div>

			<div className='main-content-container'>
				<LoginForm />
				{/* <DataPicker /> */}
				<TasksHolder />
				<AddTaskForm />
			</div>
		</TasksContextProvider>
	);
}

export default App;
