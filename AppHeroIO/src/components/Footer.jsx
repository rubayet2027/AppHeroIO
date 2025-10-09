import React from 'react';
import logo from '../assets/assets/logo.png'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div >   
            <footer className="footer sm:footer-horizontal bg-[#001931] text-white p-10 ">
                <div className='max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title mt-5">Services</h6>
                        <a className="link link-hover mt-5">Branding</a>
                        <a className="link link-hover mt-5">Design</a>
                        <a className="link link-hover mt-5">Marketing</a>
                        <a className="link link-hover mt-5">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title mt-5">Company</h6>
                        <a className="link link-hover mt-5">About us</a>
                        <a className="link link-hover mt-5">Contact</a>
                        <a className="link link-hover mt-5">Jobs</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title mt-5">Legal</h6>
                        <a className="link link-hover mt-5">Terms of use</a>
                        <a className="link link-hover mt-5">Privacy policy</a>
                        <a className="link link-hover mt-5">Cookie policy</a>
                    </nav>
                </div>
            </footer>
            <footer className="footer bg-[#001931] text-white border-t border-[0.5px] border-white/5 px-10 py-4 ">
                <div className='max-w-[1400px] mx-auto w-full'>
                    <aside className="grid-flow-col items-center">
                        <NavLink to={"/"} className="flex items-center gap-3 inter-body text-[20px] font-bold text-white">
                            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
                            <span>AppHero.IO</span>
                        </NavLink>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid gap-4">
                            <p>Social Links</p>
                            <div className="grid grid-flow-col gap-4">
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <p className='w-full flex items-center gap-2 justify-center text-center text-md font-semibold'>
                    © 2023 AppHero.IO. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;