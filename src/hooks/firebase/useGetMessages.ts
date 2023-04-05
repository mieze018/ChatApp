import { FirebaseError } from 'firebase/app'
import { getDatabase, onChildAdded, onValue, ref } from 'firebase/database'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { useError } from '@/src/hooks/firebase/useError'
import { dbNameChat } from '@/src/libs/firebase'
import { chatsAtom, isLoadingChatsAtom, userAtom } from '@/src/libs/states'

export const useGetMessages = () => {
  const user = useAtomValue(userAtom)
  const setChats = useSetAtom(chatsAtom)
  const { setError } = useError()
  const setIsLoadingChats = useSetAtom(isLoadingChatsAtom)
  useEffect(() => {
    if (!user) return
    const handleOnEmpty = () => {
      setChats([])
      setIsLoadingChats(false)
    }
    try {
      const db = getDatabase()
      const chatRef = ref(db, dbNameChat)
      onValue(chatRef, (snapshot) => {
        const values = snapshot.val()
        if (values === null) {
          handleOnEmpty()
          return
        }
      })
      onChildAdded(chatRef, (snapshot) => {
        const value = snapshot.val()
        const id = snapshot.key
        if (value === null || id === null) {
          handleOnEmpty()
          return
        }

        const { message, createdAt, user } = value
        setChats((prevChats) => {
          const isExist = prevChats?.some((chat) => chat.id === id)
          if (isExist) return prevChats
          return [...(prevChats ?? []), { id, message, createdAt, user }]
        })
      })
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e)
      }
    } finally {
      setIsLoadingChats(false)
    }
    return () => setIsLoadingChats(false)
  }, [setChats, setError, setIsLoadingChats, user])
}
