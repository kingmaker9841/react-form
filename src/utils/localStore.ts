export class LocalStorage {
  constructor() {
    // Constructor logic, if needed
  }

  get(key: string): any {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      return JSON.parse(storedValue)
    }
    return null
  }

  set(key: string, value: any): void {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }

  clear(): void {
    localStorage.clear()
  }
}
