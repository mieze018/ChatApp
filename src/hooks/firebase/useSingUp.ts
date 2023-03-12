import { getDatabase, push, ref } from '@firebase/database'
import { FirebaseError } from 'firebase/app'
import { updateProfile } from 'firebase/auth'
import router from 'next/router'

import type { FormEvent } from 'react'

import { useAuthAnonymous } from '@/src/hooks/firebase/useAuthAnonymous'
import { useError } from '@/src/hooks/firebase/useError'

export const useSignUp = () => {
  const { error, setError } = useError()

  const { handleAuthAnonymous } = useAuthAnonymous()
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const db = getDatabase()
      const dbRef = ref(db, 'user')
      await handleAuthAnonymous().then((user) => {
        const { uid, displayName, photoURL } = user
        updateProfile(user, {
          displayName: 'test',
          photoURL: 'https://placehold.jp/150x150.png',
        })
        push(dbRef, {
          uid,
          displayName,
          photoURL,
        })
        router.push('/chat')
        return user
      })
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e)
      }
    }
  }

  return { error, handleSignUp }
}
export type useSignUpType = ReturnType<typeof useSignUp>
