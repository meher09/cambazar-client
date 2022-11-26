import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navigation = () => {

    const menuitems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }


    return (
        <div className='container-fluid bg-black'>
            <div className="container">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuitems}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-white normal-case text-xl">CamSell</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 text-white">
                            {menuitems}

                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.uid ? <>
                                <Link to='/dashboard' className="mr-3 btn btn-ghost text-white  menu menu-horizontal p-0">Dashboard</Link>
                                <p className="btn btn-sm" onClick={handleLogout}>Log out</p>
                            </>

                                :
                                <Link to="/login" className="btn btn-sm">Login</Link>
                        }

                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Navigation;