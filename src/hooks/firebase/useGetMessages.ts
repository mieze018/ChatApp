import { FirebaseError } from 'firebase/app'
import { getDatabase, ref, onValue, onChildAdded } from 'firebase/database'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { useError } from '@/src/hooks/firebase/useError'
import { dbNameChat } from '@/src/libs/firebase'
import { chatsAtom, isLoadingChatsAtom, userAtom } from '@/src/libs/states'

export const useGetMessages = () => {
  const user = useAtomValue(userAtom)
  const setChats = useSetAtom(chatsAtom)
  const { error, setError } = useError()
  const setIsLoadingChats = useSetAtom(isLoadingChatsAtom)
  useEffect(() => {
    if (!user) return
    try {
      const db = getDatabase()
      const chatRef = ref(db, dbNameChat)
      onValue(chatRef, (snapshot) => {
        const value = snapshot.val()
        if (value === null) {
          setIsLoadingChats(false)
          setChats([])
          return
        }
      })
      return onChildAdded(chatRef, (snapshot) => {
        const value = snapshot.val()
        const { message, createdAt, user } = value
        setChats((prev = []) => [...prev, { message, createdAt, user }])
        setIsLoadingChats(false)
      })
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e)
      }

      setIsLoadingChats(false)
    }
    return () => setIsLoadingChats(false)
  }, [setChats, setError, setIsLoadingChats, user])
}
