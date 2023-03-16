import '@/styles/tailwind.css'
import React from 'react'

import type { AppProps } from 'next/app'

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
