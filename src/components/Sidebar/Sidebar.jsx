import './Sidebar.scss';

const Sidebar = ({ children }) => {
    return (
        <aside className="sidebar">
            <h1 className="sidebar__title">Smart<span className="sidebar__title-accent">TODO</span></h1>
            {children}
        </aside>
    );
};

export default Sidebar;