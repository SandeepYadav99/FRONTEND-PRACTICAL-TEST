import Header from './Header';
import Sidebar from './SideBar';

type DashboardProps = {
    children: JSX.Element | any;
};

const DashboardLayoutComponent = ({ children }: DashboardProps): JSX.Element => {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <Sidebar />
                {children}
            </div>
        </>
    );
};

export default DashboardLayoutComponent;