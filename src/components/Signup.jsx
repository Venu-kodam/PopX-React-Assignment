import React, { useState } from 'react'
import FancyLabelInput from './ui/floating-label'
import { Link, useNavigate } from 'react-router-dom'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const schema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Enter valid email"),
  password: z.string().min(6, "Minimum 6 characters"),
  phone: z.string().min(10, "Enter valid phone number"),
  company: z.string().min(2, "Company name is required"),
  isAgency: z.enum(["Yes", "No"], { required_error: "Please select an option" })
})

const Signup = ({ setUserData }) => {
  const navigate = useNavigate()

  //schema for form validation
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {

    // Save user to localStorage
    const newUser = {
      fullName: data.fullName,
      email: data.email,
      password: data.password, // will use for login comparison
    }

    const existingUsers = JSON.parse(localStorage.getItem("popx-users")) || []

    // Check if email already exists
    const isEmailTaken = existingUsers.some((user) => user.email === newUser.email)
    if (isEmailTaken) {
      toast.error("User with this email already exists.")
      return
    }

    // Save new user
    const updatedUsers = [...existingUsers, newUser]
    localStorage.setItem("popx-users", JSON.stringify(updatedUsers))

    // Save active user
    localStorage.setItem("active-user", JSON.stringify({
      fullName: data.fullName,
      email: data.email
    }))
    
    // Save to context/state for profile
    setUserData({ fullName: newUser.fullName, email: newUser.email })
    toast.success("Signed up successfully")
    navigate("/profile")
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='border sm:w-[380px] min-h-[550px] border-gray-400 rounded-md bg-white px-8 py-8'>
      <h1 className='text-3xl font-bold my-2'>Create your <br /> PopX account</h1>
      <FancyLabelInput
        label="Full Name"
        name="fullName"
        placeholder="Venu"
        required
        {...register("fullName")}
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      <FancyLabelInput
        label="Phone number"
        name="phonenumber"
        placeholder="9876543210"
        required
        {...register("phone")}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      <FancyLabelInput
        label="Email address"
        name="emailaddress"
        placeholder="abc@gmail.com"
        required
        {...register("email")}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      <FancyLabelInput
        label="Password"
        name="password"
        placeholder="password"
        required
        {...register("password")}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      <FancyLabelInput
        label="Company name"
        name="companyname"
        placeholder="popx"
        required="true"
        {...register("company")}
      />
      {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
      <div>
        <p>
          Are you an Agency? <span className='text-red-500'>*</span>
        </p>
        <div className='flex gap-4'>
          <div>
            <input type="radio" value="Yes" {...register("isAgency")} />
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input type="radio" value="No" {...register("isAgency")} />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {errors.isAgency && (
          <p className="text-red-500 text-sm">{errors.isAgency.message}</p>
        )}
        <button type='submit' className="w-full my-2 py-3 cursor-pointer bg-[#4c36f1] rounded-lg font-semibold text-white">Create Account</button>
      </div>
    </form>
  )
}

export default Signup