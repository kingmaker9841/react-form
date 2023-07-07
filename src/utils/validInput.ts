export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email)
}

export function isValidPassword(password: string) {
  return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
}
