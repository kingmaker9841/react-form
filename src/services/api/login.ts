import constants from 'config/constants.dev'
import { buildUrl } from 'utils/buildUrl'

interface LoginProps {
  email: string
  password: string | number
}

const login = async (payload: LoginProps): Promise<void> => {
  const url = buildUrl([constants.baseUrl, constants.authEndpoint])
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    return result.json()
  } catch (err) {
    console.error(err)
  }
}

export { login }
