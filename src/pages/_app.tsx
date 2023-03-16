import '@/styles/tailwind.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'

import type { User } from 'firebase/auth'
import type { AppProps } from 'next/app'

import { firebaseStorage, initializeFirebaseApp } from '@/src/libs/firebase'
import GlobalStyles from '@/styles/GlobalStyles'

firebaseStorage(initializeFirebaseApp())

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuth()
  onAuthStateChanged(auth, (authUser) => {
    setUser(authUser)
    setIsAuthLoading(false)
  })
  const [user, setUser] = useState<User | null | undefined>(undefined)
  const [isAuthLoading, setIsAuthLoading] = useState(true)
  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        isAuthLoading={isAuthLoading}
        setIsAuthLoading={setIsAuthLoading}
        user={user}
      />
    </>
  )
}
export type userStateType = {
  user: User | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}
export type authLoadingStateType = {
  isAuthLoading: boolean
  setIsAuthLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type AppPropsType = userStateType & authLoadingStateType & AppProps
