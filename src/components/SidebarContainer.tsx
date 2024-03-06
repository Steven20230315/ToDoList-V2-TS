import { type PropsWithChildren, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SidebarToggleBtn from './SidebarToggleBtn';

type SidebarContainerProps = PropsWithChildren<{}>;
// TODO: Now, when screen width is smaller than 768px, the sidebar is not shown. And user can't open it. In the future, even when screen width is smaller than 768px, the sidebar should be able to be opened and closed. And it should be on top of the main content (z-index). I am not sure should I create a new component for this or I can use CSS to implement this feature. 
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
