import { createContext, useContext, useReducer } from 'react';

export type TaskInfo = {
	id: number;
	title: string;
	description: string;
	date: string;
	priority: string;
	label: string;
};
// 定義task 相關 action 的type
type TaskAction = {
	deleteTask: (id: number) => void;
	addTask: (task: TaskInfo) => void;
	openTaskModal(task: TaskInfo): void;
	closeTaskModal(): void;
};

type TasksContextValue = {
	tasks: TaskInfo[];
} & TaskAction;

type DeleteTaskAction = {
	type: 'DELETE';
	id: number;
};

type AddTaskAction = {
	type: 'ADD';
	task: TaskInfo;
};

type OpenModalAction = {
	type: 'OPEN_MODAL' | 'OPEN_COMMENT';
	task: TaskInfo;
};




type Action = DeleteTaskAction | AddTaskAction | OpenModalAction;

export const TasksContext = createContext<TasksContextValue | null>(null);

function tasksReducer(tasks: TaskInfo[], action: Action): TaskInfo[] {
	if (action.type === 'DELETE') {
		return tasks.filter((task) => task.id !== action.id);
	}

	if (action.type === 'ADD') {
		return [...tasks, action.task];
	}

	return tasks;
}

export function useTasksContext() {
	const taskContext = useContext(TasksContext);

	if (!taskContext) {
		throw new Error(
			'useTasksContext must be used within a TasksContextProvider'
		);
	}
	return taskContext;
}

type TasksContextProviderProps = {
	children: React.ReactNode;
};

export default function TasksContextProvider({
	children,
}: TasksContextProviderProps) {
	const [tasks, dispatch] = useReducer(tasksReducer, [
		{
			id: 1,
			title: 'Task 1',
			description: 'Description for Task 1',
			date: '2024-03-11',
			priority: 'Medium',
			label: 'Personal',
		},
		{
			id: 2,
			title: 'Task 2',
			description: 'Description for Task 2',
			date: '2024-03-12',
			priority: 'High',
			label: 'Work',
		},
		{
			id: 3,
			title: 'Task 3',
			description: 'Description for Task 3',
			date: '2024-03-13',
			priority: 'Low',
			label: 'Study',
		},
		{
			id: 4,
			title: 'Task 4',
			description: 'Description for Task 4',
			date: '2024-03-14',
			priority: 'High',
			label: 'Personal',
		},
		{
			id: 5,
			title: 'Task 5',
			description: 'Description for Task 5',
			date: '2024-03-15',
			priority: 'Low',
			label: 'Work',
		},
	]);
	const TasksContextValue = {
		tasks,
		deleteTask: (id: number) => {
			dispatch({ type: 'DELETE', id });
		},
		addTask: (task: TaskInfo) => {
			dispatch({ type: 'ADD', task });
		},openModal: (task: TaskInfo) => {
			dispatch({ type: 'OPEN_MODAL', task });
		},closeModal: () => {
			dispatch({ type: 'CLOSE_MODAL' });
		}
	};
	return (
		<TasksContext.Provider value={TasksContextValue}>
			{children}
		</TasksContext.Provider>
	);
}
