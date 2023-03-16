import { getAuth, updateProfile } from 'firebase/auth'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from 'firebase/storage'
import { useState } from 'react'

import type { userStateType } from '@/src/pages'
import type { FirebaseError } from 'firebase/app'
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
    setProgress(0)
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
      // 匿名ユーザーを作成
      await handleAuthAnonymous().then((user) => {
        uploadPhotoThenUpdateProfile({ user, file })
      })
    } catch (e) {
      setError(e as FirebaseError)
    }
  }
  // 画像をアップロードしてPhotoURLに設定、ユーザー名を更新
  const uploadPhotoThenUpdateProfile = ({ user, file }: { user: User; file: File }) => {
    const storage = getStorage()
    const metadata = { contentType: 'image/png' }
    const photoRef = storageRef(storage, `user/${user.uid}/photoURL.png`)
    const uploadTask = uploadBytesResumable(photoRef, file, metadata)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      (error) => setError(error),
      () => {
        setError(null)
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhotoURL(downloadURL)
          updateProfile(user, { displayName: displayName, photoURL: downloadURL }).then(() => {
            // ユーザー情報を再取得
            const auth = getAuth()
            setUser(auth.currentUser)
            setError(null)
            resetFormValue()
          })
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
