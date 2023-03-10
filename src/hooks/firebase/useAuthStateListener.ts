import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const useAuthStateListener = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/')
      setIsLoading(false)
    }
    if (user) {
      router.push('/chat')
      setIsLoading(false)
    }
  })
  return { user, isAuthLoading: isLoading }
}
export type useAuthStateListenerType = ReturnType<typeof useAuthStateListener>
