import { getDatabase, push, ref } from '@firebase/database'
import { FirebaseError } from 'firebase/app'
import { useAtom, useAtomValue } from 'jotai'

import type { FormEvent } from 'react'

import { useError } from '@/src/hooks/firebase/useError'
import { messageAtom, userAtom } from '@/src/libs/states'

export const usePostMessage = () => {
  const [message, setMessage] = useAtom(messageAtom)
  const user = useAtomValue(userAtom)
  const { error, setError } = useError()

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message) return
    try {
      const db = getDatabase()
      const dbRef = ref(db, 'chat')
      await push(dbRef, {
        message,
        createdAt: new Date().toISOString(),
        user: {
          displayName: user?.displayName,
          photoURL: user?.photoURL,
          uid: user?.uid,
        },
      })
      setMessage('')
    } catch (cachedError) {
      if (cachedError instanceof FirebaseError) {
        setError(cachedError)
      }
    }
  }
  return { message, error, setMessage, handleSendMessage }
}
export type usePostMessageType = ReturnType<typeof usePostMessage>
