// we will design a common button that can be used on places where there will be a need of a button
import React from 'react'
// !ye children button ke andar likhne wala text hi hai aur kuch nhi
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={` px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props}>
            {children}
        </button>
    )
}

export default Button
