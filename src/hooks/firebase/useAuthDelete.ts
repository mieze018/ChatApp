import { FirebaseError } from 'firebase/app'
import { getAuth, deleteUser } from 'firebase/auth'
import { useSetAtom } from 'jotai'

import { useError } from '@/src/hooks/firebase/useError'
import { chatsAtom, isAuthLoadingAtom } from '@/src/libs/states'

export const useAuthDelete = () => {
  const setIsAuthLoading = useSetAtom(isAuthLoadingAtom)
  const setChats = useSetAtom(chatsAtom)
  const { error, setError } = useError()
  const deleteAccount = () => {
    const auth = getAuth()
    if (!auth.currentUser) return
    setIsAuthLoading(true)
    deleteUser(auth.currentUser)
      .then(() => {
        setIsAuthLoading(false)
        setChats(undefined)
      })
      .catch((e) => {
        if (e instanceof FirebaseError) {
          setError(e)
        }
      })
  }
  return { deleteAccount, error }
}
