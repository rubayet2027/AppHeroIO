import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../assets/assets/logo.png'
import './NavBar.css'

export default function NavBar() {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="max-w-[1500px] mx-auto flex items-center justify-between w-full px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to={"/"} className={({isActive}) => `relative px-2 py-1 ${isActive ? 'navlink-active' : 'navlink-inactive'}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/apps"} className={({isActive}) => `relative px-2 py-1 ${isActive ? 'navlink-active' : 'navlink-inactive'}`}>
                                    Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/installation"} className={({isActive}) => `relative px-2 py-1 ${isActive ? 'navlink-active' : 'navlink-inactive'}`}>
                                    Installation
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to={"/"} className="flex items-center gap-3 inter-body text-[20px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
                        <span>AppHero.IO</span>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[15px] font-medium">
                        <li>
                            <NavLink to={"/"} className={({isActive}) => `relative px-2 py-1 ${isActive ? 'navlink-active' : 'navlink-inactive'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/apps"} className={({isActive}) => `relative px-2 py-1 ${isActive ? 'navlink-active' : 'navlink-inactive'}`}>
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/installation"} className={({isActive}) => `relative px-2 py-1 ${isActive ? 'navlink-active' : 'navlink-inactive'}`}>
                                Installation
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={"/contribute"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" aria-hidden="true">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.043.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.824 1.102.824 2.222 0 1.606-.014 2.896-.014 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Contribute
                    </NavLink>
                </div>

            </div>

        </div>
    )
}
