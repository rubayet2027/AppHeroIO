import { Link, NavLink } from 'react-router-dom'
import error404 from '../assets/assets/error-404.png'

export default function NotFound404() {
  return (
    <section className='flex flex-col justify-center items-center '>
  <img src={error404} alt="not found" className="w-[500px] max-w-[80%] mt-6 mb-6 object-contain"/>
      <h2 className='text-4xl font-bold mb-2'>Oops, page not found!</h2>
      <p className='text-[#627382]'>The page you are looking for is not available.</p>
      <p>
        <NavLink to={"/"} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2 my-5">
         Go Home
        </NavLink>
      </p>
    </section>
  )
}
