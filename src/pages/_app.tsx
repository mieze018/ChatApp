import '@/styles/globals.css'
import React from 'react'

import type { User } from 'firebase/auth'
import type { AppProps } from 'next/app'

import { WrapperApp } from '@/src/components/atom/WrapperApp'
import { useAuthStateListener } from '@/src/hooks/firebase/useAuthStateListener'
import { firebaseStorage, initializeFirebaseApp } from '@/src/libs/firebase'
import GlobalStyles from '@/styles/GlobalStyles'

firebaseStorage(initializeFirebaseApp())
export default function App({ Component, pageProps }: AppProps) {
  const { user, isAuthLoading } = useAuthStateListener()
  return (
    <WrapperApp>
      <GlobalStyles />
      <Component {...pageProps} isAuthLoading={isAuthLoading} user={user} />
    </WrapperApp>
  )
}
export type AppPropsType = {
  isAuthLoading: boolean
  user: User | null
} & AppProps
