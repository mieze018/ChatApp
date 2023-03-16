import { getAuth, onAuthStateChanged } from 'firebase/auth'

import type { userStateType, authLoadingStateType } from '@/src/pages'

export const authListener = ({
  setUser,
  setIsAuthLoading,
}: Pick<userStateType, 'setUser'> & Pick<authLoadingStateType, 'setIsAuthLoading'>) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (authUser) => {
    setUser(authUser)
    setIsAuthLoading(false)
  })
}
