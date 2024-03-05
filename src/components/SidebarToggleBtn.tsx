import { GoSidebarCollapse } from 'react-icons/go';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';
type SidebarToggleBtnProps = {
	onToggle: () => void;
	toggled: boolean;
};

export default function SidebarToggleBtn({
	onToggle,
	toggled,
}: SidebarToggleBtnProps) {
	

	return (
		<button
			className={`navbar_btn ${toggled ? 'collapse' : ''}`}
			onClick={onToggle}
		>
			{toggled ? <GoSidebarCollapse /> : <TbLayoutSidebarLeftCollapse />}
		</button>
	);
}
