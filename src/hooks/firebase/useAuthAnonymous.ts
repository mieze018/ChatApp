import { getAuth, signInAnonymously } from 'firebase/auth'
import { useState } from 'react'

import type { User } from 'firebase/auth'

import { useError } from '@/src/hooks/firebase/useError'

export const useAuthAnonymous = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { error, setError } = useError()

  const handleAuthAnonymous: () => Promise<User> = () => {
    return new Promise((resolve, reject) => {
      signInAnonymously(auth)
        .then((userCredential) => {
          const user = userCredential.user
          setIsLoading(false)
          resolve(user)
        })
        .catch((e) => {
          setError(e)
          setIsLoading(false)
          reject(e)
        })
    })
  }

  return { user, handleAuthAnonymous, error, isLoading }
}
export type useAuthAnonymousType = ReturnType<typeof useAuthAnonymous>
