import React from 'react'

interface ButtonProps {
  children: React.ReactNode | string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, onClick } = props
  return (
    <div className='button-container'>
      <button type={type || 'button'} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
