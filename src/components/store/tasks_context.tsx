import { createContext, useContext, useReducer } from 'react';

export type TaskInfo = {
	id: string;
	title: string;
	description: string;
	date: string;
	priority: 'low' | 'medium' | 'high';
	label: 'personal' | 'work' | 'study';
};
// 定義task 相關 action 的type
type TaskAction = {
	deleteTask: (id: string) => void;
	addTask: (task: TaskInfo) => void;
};

type TasksContextValue = {
	tasks: TaskInfo[];
} & TaskAction;

type DeleteTaskAction = {
	type: 'DELETE';
	id: string;
};

type AddTaskAction = {
	type: 'ADD';
	task: TaskInfo;
};

type Action = DeleteTaskAction | AddTaskAction;

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

const initialTasks: TaskInfo[] = [
	{
		id: '1',
		title: 'Task 1',
		description: 'Description for Task 1',
		date: '2024-03-11',
		priority: 'medium',
		label: 'personal',
	},
	{
		id: '2',
		title: 'Task 2',
		description: 'Description for Task 2',
		date: '2024-03-12',
		priority: 'high',
		label: 'work',
	},
	{
		id: '3',
		title: 'Task 3',
		description: 'Description for Task 3',
		date: '2024-03-13',
		priority: 'low',
		label: 'study',
	},
	{
		id: '4',
		title: 'Task 4',
		description: 'Description for Task 4',
		date: '2024-03-14',
		priority: 'high',
		label: 'personal',
	},
	{
		id: '5',
		title: 'Task 5',
		description: 'Description for Task 5',
		date: '2024-03-15',
		priority: 'low',
		label: 'work',
	},
];

export default function TasksContextProvider({
	children,
}: TasksContextProviderProps) {
	// const [tasks, dispatch] = useReducer(tasksReducer, []);
	const [tasks, dispatch] = useReducer<React.Reducer<TaskInfo[], Action>>(
		tasksReducer,
		initialTasks
	);
	const TasksContextValue = {
		tasks,
		deleteTask: (id: string) => {
			dispatch({ type: 'DELETE', id });
		},
		addTask: (task: TaskInfo) => {
			dispatch({ type: 'ADD', task });
		},
	};
	return (
		<TasksContext.Provider value={TasksContextValue}>
			{children}
		</TasksContext.Provider>
	);
}
