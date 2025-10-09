import React from 'react';
import apperror from "../assets/assets/App-Error.png";

const NotFoundApp = ({ onGoBack }) => {
    return (
      <section className='flex flex-col justify-center items-center '>
        <img
          src={apperror}
          alt="not found"
          className="w-[500px] max-w-[80%] mt-15 mb-6 object-contain"
        />
        <h2 className='text-4xl font-bold mb-2'>OOPS!! APP NOT FOUND</h2>
        <p className='text-[#627382] text-center'>
          The App you are requesting is not found on our system. Please try another app.
        </p>
        <p>
          <button
            onClick={onGoBack}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2 my-5">
            Go Back!
          </button>

        </p>
      </section>
    );
};

export default NotFoundApp;
