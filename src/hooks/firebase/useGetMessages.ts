import { FirebaseError } from 'firebase/app'
import { getDatabase, ref, onValue, onChildAdded } from 'firebase/database'
import { useAtom, useAtomValue } from 'jotai'
import { useEffect } from 'react'

import { useError } from '@/src/hooks/firebase/useError'
import { chatsAtom, isAuthLoadingAtom, isBlankAtom, userAtom } from '@/src/libs/states'

export const useGetMessages = () => {
  const user = useAtomValue(userAtom)
  const [chats, setChats] = useAtom(chatsAtom)
  const [isBlank, setIsBlank] = useAtom(isBlankAtom)
  const { error, setError } = useError()
  const [isLoading, setIsLoading] = useAtom(isAuthLoadingAtom)
  useEffect(() => {
    if (user) {
      try {
        const db = getDatabase()
        const chatRef = ref(db, 'chat')
        onValue(chatRef, (snapshot) => {
          const value = snapshot.val()
          if (value === null) {
            setIsLoading(false)
            setIsBlank(true)
            return
          }
          setIsLoading(false)
        })
        return onChildAdded(chatRef, (snapshot) => {
          const value = snapshot.val()
          const { message, createdAt, user } = value
          setChats((prev = []) => [...prev, { message, createdAt, user }])
          setIsLoading(false)
        })
      } catch (e) {
        if (e instanceof FirebaseError) {
          setError(e)
        }

        setIsLoading(false)
        return
      }
    }
    return
  }, [setChats, setError, setIsBlank, setIsLoading, user])
  return { chats, isLoading, isBlank, error }
}
