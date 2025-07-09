// import React, { forwardRef } from "react"

// const FancyLabelInput= forwardRef({ label, name,placeholder, required = false, ...rest },ref)=> {
//   return (
//     <div className="relative w-full my-4">
//       {/* Label */}
//       <div className="absolute -top-2 left-2 z-10 px-2 bg-gray-50  text-sm font-medium text-purple-600">
//         {label}
//         {required && <span className="text-red-500">*</span>}
//       </div>

//       {/* Input */}
//       <input
//         type="text"
//         id={name}
//         name={name}
//         value={value}
//         placeholder={placeholder}
//         required={required}
//         {...rest}
//         className="w-full border border-gray-300 rounded-md  px-3 py-2 placeholder:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//       />
//     </div>
//   )
// }

// FancyLabelInput.displayName = "FancyLabelInput"

import React, { forwardRef } from "react"

const FancyLabelInput = forwardRef(
  ({ label, name, required = false, placeholder, ...rest }, ref) => {
    return (
      <div className="relative w-full my-4">
        {/* Label */}
        <div className="absolute -top-2 left-2 z-10 px-2 bg-gray-50 text-sm font-medium text-purple-600">
          {label}
          {required && <span className="text-red-500">*</span>}
        </div>

        {/* Input */}
        <input
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          required
          {...rest}
          className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
    )
  }
)

FancyLabelInput.displayName = "FancyLabelInput"
export default FancyLabelInput
