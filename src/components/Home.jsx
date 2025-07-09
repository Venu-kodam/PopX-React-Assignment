import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='border sm:w-[380px] min-h-[550px] border-gray-400 flex flex-col justify-end rounded-md bg-white px-8 py-8'>
      <div className='mx-auto my-8 rounded-full bg-yellow-500 hover:bg-[#4c36f1] text-white w-8 h-8 cursor-pointer flex items-center justify-center'>1</div>
      <div>
        <h1 className='font-bold text-3xl'>Welcome to PopX</h1>
        <p className='text-base font-semibold text-gray-500 mt-3'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>
        <div className="my-8">
          <Link to="/signup">
            <button className="w-full my-2 py-3 cursor-pointer bg-[#4c36f1] rounded-lg font-semibold text-white">Create Account</button>
          </Link>
          <Link to="/signin">
            <button className="w-full my-2 py-3 cursor-pointer bg-purple-300 rounded-lg font-semibold">Already Registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home