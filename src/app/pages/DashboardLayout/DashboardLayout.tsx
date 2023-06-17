// import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import DashboardLayoutComponent from '../../components/Layout/DashBoardComponent';
// import Dashboard from '../Dashboard/Dashboard';

function DashboardLayout() {
    return (
        <>
            <DashboardLayoutComponent>
                {/* <Routes> */}
                    {/*dashboard */}
                    {/* <Route path="/" element={<Dashboard />} />
                    <Route path="/*" element={<Navigate replace to={'/dashboard'} />} /> */}
                {/* </Routes> */}
                {/* <Outlet /> */}
            </DashboardLayoutComponent>
        </>
    );
}

export default DashboardLayout;