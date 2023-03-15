import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useAuthStateListener = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const router = useRouter()
  const isReady = router.isReady
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    if (isReady) setIsLoading(false)
  }, [isReady])

  onAuthStateChanged(auth, (user) => {
    return user
  })
  return { user, isAuthLoading: isLoading }
}
export type useAuthStateListenerType = ReturnType<typeof useAuthStateListener>
