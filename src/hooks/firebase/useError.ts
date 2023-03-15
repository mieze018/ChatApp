import { useState } from 'react'

import type { FirebaseError } from 'firebase/app'

export const useError = () => {
  const [error, setError] = useState<FirebaseError | { message: string } | null>(null)
  return { error, setError }
}
export type useErrorType = ReturnType<typeof useError>
