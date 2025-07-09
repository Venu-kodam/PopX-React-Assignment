import React, { useState } from 'react'
import FancyLabelInput from './ui/floating-label'
import { Link, useNavigate } from 'react-router-dom'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
})


const Signin = ({ setUserData }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signinSchema)
  })

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("popx-users")) || []

    const matchedUser = users.find(user => user.email === data.email && user.password === data.password)

    if (matchedUser) {
      localStorage.setItem("active-user", JSON.stringify({
        fullName: matchedUser.fullName,
        email: matchedUser.email
      }))
      
      setUserData({ fullName: matchedUser.fullName, email: matchedUser.email })
      toast.success("Loggedin successfully!")
      navigate("/profile")
    } else {
      toast.error("Invalid email or password.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='border sm:w-[380px] min-h-[550px] border-gray-400 rounded-md bg-white px-8 py-8'>
      <h1 className='text-3xl font-bold '>Signin to your <br /> PopX account</h1>
      <p className='text-base font-semibold text-gray-500 mt-4'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>

      <FancyLabelInput
        label="Email address"
        name="emailaddress"
        placeholder="Enter email address"
        required
        {...register("email")}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      <FancyLabelInput
        label="Password"
        name="password"
        placeholder="Enter password"
        required
        {...register("password")}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      <button type="submit" className="w-full my-2 py-3 cursor-pointer bg-gray-300 hover:bg-black rounded-lg font-semibold text-white">Login</button>
    </form>
  )
}

export default Signin