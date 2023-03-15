import { FirebaseError } from 'firebase/app'
import { getDatabase, ref, onValue, onChildAdded } from 'firebase/database'
import { useState, useEffect } from 'react'

import type { chatType } from '@/src/types/firebaseDB'

import { useError } from '@/src/hooks/firebase/useError'

export const useGetMessages = () => {
  const [chats, setChats] = useState<chatType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isBlank, setIsBlank] = useState<boolean>(false)
  const { error, setError } = useError()
  useEffect(() => {
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
        setChats((prev) => [...prev, { message, createdAt, user }])
        setIsLoading(false)
      })
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e)
      }

      setIsLoading(false)
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { chats, isLoading, isBlank, error }
}
export type useGetMessagesType = ReturnType<typeof useGetMessages>
