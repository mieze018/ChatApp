import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

import type { User } from 'firebase/auth'

export const useAuthStateListener = () => {
  const auth = getAuth()
  const [user, setUser] = useState<User | null>(auth.currentUser)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  onAuthStateChanged(auth, (authUser) => {
    console.log(authUser)
    setUser(authUser)
    setIsLoading(false)
  })

  return { user, isAuthLoading: isLoading }
}
export type useAuthStateListenerType = ReturnType<typeof useAuthStateListener>
