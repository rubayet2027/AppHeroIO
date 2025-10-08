import React from 'react';
import apperror from "../assets/assets/App-Error.png"

const NotFoundApp = () => {
    return (
    <section className='flex flex-col justify-center items-center '>
      <img src={apperror} alt="not found" className="w-[500px] max-w-[80%] mt-15 mb-6 object-contain"/>
      <h2 className='text-4xl font-bold mb-2'>OPPS!! APP NOT FOUND</h2>
      <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
      <p>
        <NavLink to={"/apps"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2 my-5">
         Go Back
        </NavLink>
      </p>
    </section>
    );
};

export default NotFoundApp;