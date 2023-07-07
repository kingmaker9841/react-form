import React from 'react'
import Input from 'components/atom/Input/Input'
import { isValidEmail } from 'utils/validInput'

interface Props {
  getEmail?: (_: string) => void
}

const EmailInput: React.FC<Props> = (props) => {
  const [, setEmail] = React.useState('')
  const [error, setError] = React.useState<null | string>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!isValidEmail(value)) {
      setError('Email is invalid')
    } else {
      setError(null)
    }

    setEmail(value)
    props.getEmail?.(value)
  }
  return (
    <div className='email-molecule'>
      <Input type='email' required={true} id='email' label='Email' onChange={handleChange} />
      {error && <span>{error}</span>}
    </div>
  )
}

export default EmailInput
