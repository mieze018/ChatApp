import React from 'react'
import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { useSignUpType } from '@/src/hooks/firebase/useSingUp'
import type { authUserType } from '@/src/types/firebaseDB'

import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'
import { OverRayLoading } from '@/src/components/combined/OverRayLoading'
import { SignInInputDisplayName } from '@/src/components/combined/SignInInputDisplayName'
import { SignInInputImage } from '@/src/components/combined/SignInInputImage'
import { SignInSubmit } from '@/src/components/combined/SignInSubmit'
import { Layout } from '@/src/components/layout/Layout'
import { microCopies } from '@/src/libs/microCopies'

const WrapperSignIn = tw.div`w-full min-h-full h-auto 
grid items-center justify-center
px-4 mx-auto
bg-gray-100
`
const SignInHeader = tw.h2`my-8 text-2xl font-semibold text-center`
const FormCard = tw.form`grid gap-8 items-center justify-center p-10 bg-white rounded shadow-md max-w-sm mx-auto`

export const LayoutSignIn: React.FC<
  LayoutProps & {
    user: authUserType | null | undefined
    handleSignUp: useSignUpType['handleSignUp']
    setDisplayName: useSignUpType['setDisplayName']
    displayName: useSignUpType['displayName']
    setFile: useSignUpType['setFile']
    file: useSignUpType['file']
    error: useSignUpType['error']
    progress: useSignUpType['progress']
    isSubmitBlocked: boolean
  }
> = ({
  user,
  onLogout,
  handleSignUp,
  setDisplayName,
  displayName,
  file,
  setFile,
  error,
  progress,
  isSubmitBlocked,
}) => (
  <Layout user={user} onLogout={onLogout}>
    <WrapperSignIn>
      <FormCard onSubmit={handleSignUp}>
        <SignInHeader>{microCopies.signInHeader}</SignInHeader>
        <SignInInputImage setFile={setFile} file={file} />
        <SignInInputDisplayName displayName={displayName} setDisplayName={setDisplayName} />
        <SignInSubmit isSubmitBlocked={isSubmitBlocked} />
        {!!(progress || (user && <OverRayLoading progressPercentage={progress} />))}
        {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
      </FormCard>
    </WrapperSignIn>
  </Layout>
)
export type LayoutSignInProps = React.ComponentProps<typeof LayoutSignIn>
