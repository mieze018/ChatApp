import { getDatabase, push, ref } from '@firebase/database'
import { FirebaseError } from 'firebase/app'
import { updateProfile } from 'firebase/auth'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from 'firebase/storage'
import router from 'next/router'
import { useState } from 'react'

import type { FormEvent } from 'react'

import { useAuthAnonymous } from '@/src/hooks/firebase/useAuthAnonymous'
import { useError } from '@/src/hooks/firebase/useError'

export const useSignUp = () => {
  const { error, setError } = useError()
  const [displayName, setDisplayName] = useState<string>('')
  const [file, setFile] = useState<File>()
  const [progress, setProgress] = useState<number>(0)
  const [photoURL, setPhotoURL] = useState<File | undefined>(undefined)

  const { handleAuthAnonymous } = useAuthAnonymous()
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!displayName) {
      // setError(new Error('名前を入力してください'))
      return
    }
    if (!file) {
      // setError(new Error('画像を選択してください'))
      return
    }
    try {
      const db = getDatabase()
      const storage = getStorage()
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/png',
      }
      const dbRef = ref(db, 'user')
      await handleAuthAnonymous().then((user) => {
        const { uid } = user
        // アップロードされた画像をstorageに保存し、updateProfileのphotoURLにURLを入れる
        const photoRef = storageRef(storage, `user/${uid}/photoURL.png`)
        photoRef.fullPath
        const uploadTask = uploadBytesResumable(photoRef, file, metadata)

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            console.log('Upload is ' + progress + '% done')
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break
              case 'running':
                console.log('Upload is running')
                break
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break
              case 'storage/canceled':
                // User canceled the upload
                break

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break
            }
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL)
            })
          }
        )

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
