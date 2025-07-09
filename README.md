# PopX React Assignment

A fully functional React application that allows users to sign up, sign in, and view a profile page with navigation between screens. Built with **React**, **React Router**, **Tailwind CSS**, **Zod**, and **React Hook Form**. User data is persisted using localStorage.

## 🚀 Features

✅ Signup with form validation using Zod + React Hook Form

✅ Signin with localStorage user lookup

✅ Session management using localStorage (active-user)

✅ Profile page displays logged-in user details

✅ Smooth screen navigation using React Router

✅ Floating label input UI with Tailwind CSS

✅ Logout functionality to clear active session

✅ Responsive and clean design

## 🛠️ Tech Stack

- **React** – UI framework

- **React Router DOM** – Page navigation

- **React Hook Form** – Form handling

- **Zod** – Schema validation

- **Tailwind CSS** – Styling


## ✨ Functional Flow

#### 🔐 Signup
- User fills the form → Validated by Zod

- Data is stored in localStorage

- active-user is set

- Redirects to Profile page

#### 🔑 Signin

- Matches email & password from users

- If matched, active-user is set

- Redirects to Profile

#### 👤 Profile

- Shows fullName and email of active-user

- Logout clears session, retains registered users

#### Live Demo

Check out the live demo here: [demo](https://popx-react-assignment.netlify.app)
