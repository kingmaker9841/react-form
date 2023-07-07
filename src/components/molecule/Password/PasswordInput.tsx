import React from 'react'
import Input from 'components/atom/Input/Input'
import { isValidPassword } from 'utils/validInput'

interface Props {
  getPassword?: (_: string) => void
}

const PasswordInput: React.FC<Props> = (props) => {
  const [, setPassword] = React.useState('')
  const [error, setError] = React.useState<null | string>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!isValidPassword(value)) {
      setError(
        'Must be minimum of 8 characters with at least 1 uppercase, 1 lowercase, 1 special character.',
      )
    } else {
      setError(null)
    }

    setPassword(value)
    props.getPassword?.(value)
  }
  return (
    <div className='password-molecule'>
      <Input
        type='password'
        required={true}
        id='password'
        label='Password'
        onChange={handleChange}
      />
      {error && <span>{error}</span>}
    </div>
  )
}

export default PasswordInput
