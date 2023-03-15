import { FirebaseError } from 'firebase/app'
import { updateProfile } from 'firebase/auth'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from 'firebase/storage'
import { useState } from 'react'

import type { FormEvent } from 'react'

import { useAuthAnonymous } from '@/src/hooks/firebase/useAuthAnonymous'
import { useError } from '@/src/hooks/firebase/useError'

export const useSignUp = () => {
  const { error, setError } = useError()
  const [displayName, setDisplayName] = useState<string>('')
  const [file, setFile] = useState<File>()
  const [progress, setProgress] = useState<number | undefined>(undefined)
  const [photoURL, setPhotoURL] = useState<string>('')
  const { handleAuthAnonymous } = useAuthAnonymous()
  const resetFormValue = () => {
    setProgress(undefined)
    setFile(undefined)
    setDisplayName('')
  }
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!displayName) {
      setError(new Error('名前を入力してください'))
      return
    }
    if (!file) {
      setError(new Error('画像を選択してください'))
      return
    }
    try {
      const storage = getStorage()
      const metadata = { contentType: 'image/png' }
      await handleAuthAnonymous().then((user) => {
        const { uid } = user
        const photoRef = storageRef(storage, `user/${uid}/photoURL.png`)
        photoRef.fullPath
        const uploadTask = uploadBytesResumable(photoRef, file, metadata)
        uploadTask.on(
          'state_changed',
          (snapshot) => setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
          (error) => setError(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setPhotoURL(downloadURL)
              resetFormValue()
              updateProfile(user, { displayName: displayName, photoURL: downloadURL })
            })
          }
        )
      })
    } catch (e) {
      if (e instanceof FirebaseError) setError(e)
    }
  }

  return {
    file,
    setFile,
    progress,
    displayName,
    setDisplayName,
    photoURL,
    setPhotoURL,
    error,
    handleSignUp,
  }
}
export type useSignUpType = ReturnType<typeof useSignUp>
