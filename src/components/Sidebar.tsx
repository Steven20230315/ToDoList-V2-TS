// TODO: When

type SidebarProps = {
	isSidebarOpen: boolean;
};

const SidebarLink = (
	<>
		<a href=''>Today</a>
		<a href=''>Overdue</a>
		<a href=''>placeholder</a>
		<a href=''>placeholder</a>
	</>
);

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
	return (
		<div className={`sidebar ${isSidebarOpen ? '' : 'collapse'}`}>
			{isSidebarOpen ? SidebarLink : ''}
		</div>
	);
}
