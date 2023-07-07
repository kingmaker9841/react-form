/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import Button from 'components/atom/Button/Button'
import EmailInput from 'components/molecule/Email/EmailInput'
import PasswordInput from 'components/molecule/Password/PasswordInput'
import { login } from 'services/api/login'
import { LocalStorage } from 'utils/localStore'

const ls = new LocalStorage()

const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async () => {
    try {
      const result = await login({ email, password })
      console.log(result)
      ls.set('_tokens', result)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='login-form-container '>
      <EmailInput getEmail={setEmail} />
      <PasswordInput getPassword={setPassword} />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  )
}

export default LoginForm
