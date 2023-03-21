import { getAuth, updateProfile } from 'firebase/auth'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from 'firebase/storage'
import { useAtom, useSetAtom } from 'jotai'

import type { FirebaseError } from 'firebase/app'
import type { User } from 'firebase/auth'
import type { FormEvent } from 'react'

import { useAuthAnonymous } from '@/src/hooks/firebase/useAuthAnonymous'
import { useError } from '@/src/hooks/firebase/useError'
import {
  displayNameAtom,
  downloadURLAtom,
  imageFileAtom,
  progressAtom,
  userAtom,
} from '@/src/libs/states'

export const useSignUp = () => {
  const setUser = useSetAtom(userAtom)
  const { setError } = useError()
  const [displayName, setDisplayName] = useAtom(displayNameAtom)
  const [imageFile, setImageFile] = useAtom(imageFileAtom)
  const setProgress = useSetAtom(progressAtom)
  const setDownloadURL = useSetAtom(downloadURLAtom)
  const { handleAuthAnonymous } = useAuthAnonymous()
  const resetFormValue = () => {
    setProgress(undefined)
    setImageFile(undefined)
    setDisplayName('')
  }

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    setError(null)
    setProgress(0)
    e.preventDefault()
    if (!displayName) {
      setError({ code: 'auth/invalid-display-name', message: 'ユーザー名を入力してください' })
      setProgress(undefined)
      return
    }
    if (!imageFile) {
      setError({ code: 'auth/invalid-photo', message: '画像を選択してください' })
      setProgress(undefined)
      return
    }
    try {
      // 匿名ユーザーを作成
      await handleAuthAnonymous().then((user) => {
        uploadPhotoThenUpdateProfile({ user, imageFile })
      })
    } catch (e) {
      setError(e as FirebaseError)
      setProgress(undefined)
    }
  }
  // 画像をアップロードしてPhotoURLに設定、ユーザー名を更新
  const uploadPhotoThenUpdateProfile = ({ user, imageFile }: { user: User; imageFile: File }) => {
    const storage = getStorage()
    const metadata = { contentType: 'image/png' }
    const photoRef = storageRef(storage, `user/${user.uid}/photoURL.png`)
    const uploadTask = uploadBytesResumable(photoRef, imageFile, metadata)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      (error) => {
        setError(error)
        setProgress(undefined)
      },
      () => {
        setError(null)
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL)
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
  return { handleSignUp }
}

export type useSignUpType = ReturnType<typeof useSignUp>
