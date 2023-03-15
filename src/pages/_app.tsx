import '@/styles/tailwind.css'
import React from 'react'

import type { User } from 'firebase/auth'
import type { AppProps } from 'next/app'

import { useAuthStateListener } from '@/src/hooks/firebase/useAuthStateListener'
import { firebaseStorage, initializeFirebaseApp } from '@/src/libs/firebase'
import GlobalStyles from '@/styles/GlobalStyles'

firebaseStorage(initializeFirebaseApp())

export default function App({ Component, pageProps }: AppProps) {
  const { user, isAuthLoading } = useAuthStateListener()
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} isAuthLoading={isAuthLoading} user={user} />
    </>
  )
}
export type AppPropsType = {
  isAuthLoading: boolean
  user: User | null
} & AppProps
