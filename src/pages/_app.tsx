import '@/styles/tailwind.css'
import React from 'react'

import type { AppProps } from 'next/app'

import { firebaseStorage, initializeFirebaseApp } from '@/src/libs/firebase'
import GlobalStyles from '@/styles/GlobalStyles'

firebaseStorage(initializeFirebaseApp())

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
