import React from 'react'

interface InputProps {
  id: string
  label: string
  placeholder?: string
  required?: boolean
  type?: string
  value?: string | number
  onChange?: (_: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
  const { type, value, placeholder, required, id, label, onChange } = props
  return (
    <div className='input-container'>
      <div className='label-container'>
        <label htmlFor={id}>
          {label} {required && <span className='input-required'>*</span>}
        </label>
      </div>
      <input
        id={id}
        placeholder={placeholder || ''}
        required={required}
        type={type || 'text'}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
