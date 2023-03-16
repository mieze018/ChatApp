import { FirebaseError } from 'firebase/app'
import { updateProfile } from 'firebase/auth'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from 'firebase/storage'
import { useState } from 'react'

import type { userStateType } from '@/src/pages'
import type { User } from 'firebase/auth'
import type { FormEvent } from 'react'

import { useAuthAnonymous } from '@/src/hooks/firebase/useAuthAnonymous'
import { useError } from '@/src/hooks/firebase/useError'

export const useSignUp = ({ setUser }: { setUser: userStateType['setUser'] }) => {
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
      await handleAuthAnonymous().then((user) => {
        postPhotoURL({ user, file }).then(() => {
          handleAuthAnonymous().then((user) => {
            setUser(user)
          })
        })
      })
    } catch (e) {
      if (e instanceof FirebaseError) setError(e)
    }
  }
  const postPhotoURL = async ({ user, file }: { user: User; file: File }) => {
    const storage = getStorage()
    const metadata = { contentType: 'image/png' }
    const photoRef = storageRef(storage, `user/${user.uid}/photoURL.png`)
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
