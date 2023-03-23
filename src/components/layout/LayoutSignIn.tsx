import React from 'react'
import tw from 'twin.macro'

import type { useSignUpType } from '@/src/hooks/firebase/useSingUp'
import type { authUserType, errorType } from '@/src/libs/states'

import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'
import { OverRayLoading } from '@/src/components/combined/OverRayLoading'
import { SignInInputDisplayName } from '@/src/components/combined/SignInInputDisplayName'
import { SignInInputImage } from '@/src/components/combined/SignInInputImage'
import { SignInSubmit } from '@/src/components/combined/SignInSubmit'
import { microCopies } from '@/src/libs/microCopies'

const WrapperSignIn = tw.div`w-full min-h-full h-auto 
grid items-center justify-center
px-4 mx-auto
bg-gray-100
`
const SignInHeader = tw.h2`my-8 text-2xl font-semibold text-center`
const FormCard = tw.form`grid gap-8 items-center justify-center p-10 bg-white rounded shadow-md max-w-sm mx-auto`

export const LayoutSignIn: React.FC<{
  user: authUserType | null | undefined
  handleSignUp: useSignUpType['handleSignUp']
  setDisplayName: (value: authUserType['displayName']) => void
  displayName: authUserType['displayName']
  setFile: (value: File) => void
  file: File | undefined
  error: errorType
  progress: number | undefined
  isSignUpSubmitBlocked: boolean
}> = ({
  user,
  handleSignUp,
  setDisplayName,
  displayName,
  file,
  setFile,
  error,
  progress,
  isSignUpSubmitBlocked,
}) => (
  <WrapperSignIn>
    <FormCard onSubmit={handleSignUp}>
      <SignInHeader>{microCopies.signInHeader}</SignInHeader>
      <SignInInputImage setFile={setFile} file={file} />
      <SignInInputDisplayName displayName={displayName} setDisplayName={setDisplayName} />
      <SignInSubmit isSignUpSubmitBlocked={isSignUpSubmitBlocked} />
      {!!(progress || (user && <OverRayLoading progressPercentage={progress} />))}
      {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
    </FormCard>
  </WrapperSignIn>
)
export type LayoutSignInProps = React.ComponentProps<typeof LayoutSignIn>
