import { getDatabase, push, ref } from '@firebase/database'
import { FirebaseError } from 'firebase/app'
import { useState } from 'react'

import type { FormEvent } from 'react'

import { useAuthAnonymous } from '@/src/hooks/firebase/useAuthAnonymous'
import { useError } from '@/src/hooks/firebase/useError'

export const useSendMessage = () => {
  const [message, setMessage] = useState<string>('')
  const { user } = useAuthAnonymous()
  const { error, setError } = useError()

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const db = getDatabase()
      const dbRef = ref(db, 'chat')
      await push(dbRef, {
        message,
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
export type useSendMessageType = ReturnType<typeof useSendMessage>
