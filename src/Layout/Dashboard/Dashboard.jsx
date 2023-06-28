
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/icons/logo.png'

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-sky-50">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    <img src={logo} className='w-28 mt-3 mb-8' alt="" />
                    <li><NavLink to={'/'} className="text-slate-500 font-semibold uppercase">Home</NavLink></li>
                    <li><NavLink to={'/dashboard/orderlist'} className="text-slate-500 font-semibold uppercase">Order list</NavLink></li>
                    <li><NavLink to={'/dashboard/addservice'} className="text-slate-500 font-semibold uppercase">Add service</NavLink></li>
                    <li><NavLink to={'/dashboard/alluser'} className="text-slate-500 font-semibold uppercase">Make Admin</NavLink></li>
                    <li><NavLink to={'/dashboard/managesarvice'} className="text-slate-500 font-semibold uppercase">Manage Services</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;