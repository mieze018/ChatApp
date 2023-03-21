import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import type { authUserDisplayableType } from '@/src/types/firebaseDB'

import { isAuthLoadingAtom, userAtom } from '@/src/libs/states'

export const useAuthListener = () => {
  const auth = getAuth()
  const setUser = useSetAtom(userAtom)
  const setIsAuthLoading = useSetAtom(isAuthLoadingAtom)
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser === null) {
        setUser(authUser)
      } else {
        const authUserDisplayable: authUserDisplayableType = {
          uid: authUser.uid,
          displayName: authUser.displayName ?? '',
          photoURL: authUser.photoURL ?? '',
        }
        setUser(authUserDisplayable)
      }
      setIsAuthLoading(false)
    })
  }, [setUser, setIsAuthLoading, auth])
}
