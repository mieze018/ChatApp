import { FirebaseError } from 'firebase/app'
import { getAuth, deleteUser } from 'firebase/auth'

import type { authLoadingStateType } from '@/src/pages/_app'

import { useError } from '@/src/hooks/firebase/useError'

export const useAuthDelete = ({
  setIsAuthLoading,
}: {
  setIsAuthLoading: authLoadingStateType['setIsAuthLoading']
}) => {
  const { error, setError } = useError()
  const deleteAccount = () => {
    const auth = getAuth()
    if (!auth.currentUser) return
    setIsAuthLoading(true)
    deleteUser(auth.currentUser)
      .then(() => {
        setIsAuthLoading(false)
      })
      .catch((e) => {
        if (e instanceof FirebaseError) {
          setError(e)
        }
      })
  }
  return { deleteAccount, error }
}
export type useAuthDeleteType = ReturnType<typeof useAuthDelete>
