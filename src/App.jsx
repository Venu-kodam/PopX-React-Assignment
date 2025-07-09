import React, { useEffect, useState } from "react"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Signin from "./components/Signin"
import Profile from "./components/Profile"
import house from './assets/house.svg'
import leftarrow from './assets/leftarrow.svg'
import rightarrow from './assets/rightarrow.svg'
import { ToastContainer } from "react-toastify"

const screens = ["/", "/signin", "/signup", "/profile"]

const App = () => {

  const [userData, setUserData] = useState({ fullName: "", email: "" })
  const navigate = useNavigate()
  const location = useLocation()   //to detect current page

  //find the currentIndex of page
  const currentIndex = screens.indexOf(location.pathname)

  //to handle previous page
  const previousPage = () => {
    if (currentIndex > 0) {
      navigate(screens[currentIndex - 1])
    }
  }

  //to handle next page
  const nextPage = () => {
    if (currentIndex < screens.length - 1) {
      navigate(screens[currentIndex + 1])
    }
  }

  useEffect(() => {
    const savedActive = JSON.parse(localStorage.getItem("active-user"))
    if (savedActive) {
      setUserData(savedActive)
    }
  }, [])
  return (
    <div className='min-h-screen w-full flex flex-col justify-center px-4 items-center py-12 sm:py-20 bg-slate-100'>
      <ToastContainer position="bottom-right" />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup setUserData={setUserData} />} />
          <Route path="/signin" element={<Signin setUserData={setUserData} />} />
          <Route path="/profile" element={<Profile userData={userData} setUserData={setUserData} />} />
        </Routes>
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center py-4 gap-2">
        <Link to="/"><img src={house} alt="home icon" className="cursor-pointer" /></Link>
        <img src={leftarrow} className={`cursor-pointer ${currentIndex <= 0 ? "opacity-30 pointer-events-none" : ""}`} onClick={() => previousPage()} alt="leftarrow" />
        <p className="font-normal">{currentIndex + 1} of 4</p>
        <img src={rightarrow} className={`cursor-pointer ${currentIndex >= screens.length - 1 ? "opacity-30 pointer-events-none" : ""}`} onClick={() => nextPage()} alt="rightarrow" />
      </div>
    </div>
  )
}

export default App