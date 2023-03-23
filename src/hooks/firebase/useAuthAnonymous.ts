import { getAuth, signInAnonymously } from 'firebase/auth'
import { useAtom } from 'jotai'

import type { User } from 'firebase/auth'

import { useError } from '@/src/hooks/firebase/useError'
import { isAuthLoadingAtom } from '@/src/libs/states'

export const useAuthAnonymous = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const [isLoading, setIsLoading] = useAtom(isAuthLoadingAtom)

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
