import { type PropsWithChildren, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SidebarToggleBtn from './SidebarToggleBtn';

type SidebarContainerProps = PropsWithChildren<{}>;

export default function SidebarContainer({ children }: SidebarContainerProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const [windowSize, setWindowSize] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (windowSize < 768) {
			setIsSidebarOpen(false);
		}
		if (windowSize > 768) {
			setIsSidebarOpen(true);
		}
	}, [windowSize]);

	return (
		<div className='sidebar-container'>
			<Sidebar isSidebarOpen={isSidebarOpen} />
			<SidebarToggleBtn
				onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
				toggled={!isSidebarOpen}
			/>
			{children}
		</div>
	);
}
