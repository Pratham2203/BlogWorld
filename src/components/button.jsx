import React from 'react'
import { Button as B} from '@nextui-org/react'
function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "px-4",
    disabled = false,
    ...props
  }) {
    return (
      <B
        isLoading={disabled}
        disabled={disabled}
        type={type}
        className={`  mx-auto py-2 rounded-lg duration-150 m-0 ${
          disabled ? " bg-red-500" : bgColor
        } ${textColor} `}
        {...props}
      >
        {children}
      </B>
    );
  }
  
export default Button
