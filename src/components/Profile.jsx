import React from 'react'
import profileImg from '../assets/image.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = ({ userData, setUserData }) => {

    const navigate = useNavigate()

    //function to handle logout
    const handleLogout = () => {
        setUserData({ fullName: "", email: "" }) // Clear state
        toast.success("Logged out")
        navigate("/")
    }
    return (
        <div className='border sm:w-[380px] min-h-[550px] border-gray-400 rounded-md bg-gray-50  '>
            <h3 className='text-xl font-semibold px-8 py-6 rounded-md bg-white text-gray-700'>Account Settings</h3>
            <div className='min-h-fit px-8 py-6'>
                <div className='flex items-center gap-4'>
                    <img src={profileImg} alt="profile" className='rounded-full w-16 h-16' />
                    <div>
                        <h1 className="font-semibold">{userData?.fullName || "Marry Doe"}</h1>
                        <p>{userData?.email || "marrydoe@gmail.com"}</p>
                    </div>
                </div>
                <p className='text-sm font-semibold text-gray-500 py-4'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonumy Nibh Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full my-2 py-3 cursor-pointer bg-gray-300 hover:bg-black rounded-lg font-semibold text-white"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Profile