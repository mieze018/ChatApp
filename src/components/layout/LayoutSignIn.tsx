import React from 'react'
import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { useSignUpType } from '@/src/hooks/firebase/useSingUp'
import type { authUserType } from '@/src/types/firebaseDB'

import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'
import { OverRayProgress } from '@/src/components/combined/OverRayProgress'
import { PageLoading } from '@/src/components/combined/PageLoading'
import { SignInInputDisplayName } from '@/src/components/combined/SignInInputDisplayName'
import { SignInInputImage } from '@/src/components/combined/SignInInputImage'
import { SignInSubmit } from '@/src/components/combined/SignInSubmit'
import { Layout } from '@/src/components/layout/Layout'
import { microCopies } from '@/src/libs/microCopies'

const WrapperSignIn = tw.div`h-full w-full 
grid items-center justify-center
px-4 mx-auto
`
const SignInHeader = tw.h2`my-8 text-2xl font-semibold text-center`
const FormCard = tw.form`grid gap-8 items-center justify-center p-10 bg-white rounded shadow-md max-w-sm mx-auto`

export const LayoutSignIn: React.FC<
  LayoutProps & {
    isLoading: boolean
    user: authUserType | undefined
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
  isLoading,
  user,
  onLogout,
  handleSignUp,
  setDisplayName,
  displayName,
  setFile,
  error,
  progress,
  isSubmitBlocked,
}) => (
  <Layout user={user} onLogout={onLogout}>
    <WrapperSignIn>
      {isLoading ? (
        <PageLoading />
      ) : (
        <FormCard onSubmit={handleSignUp}>
          <SignInHeader>{microCopies.signInHeader}</SignInHeader>
          <SignInInputImage setFile={setFile} />
          <SignInInputDisplayName displayName={displayName} setDisplayName={setDisplayName} />
          <SignInSubmit isSubmitBlocked={isSubmitBlocked} />
          {progress && <OverRayProgress progressPercentage={progress} />}
          {progress > 0 && <OverRayProgress progressPercentage={progress} />}
          {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
        </FormCard>
      )}
    </WrapperSignIn>
  </Layout>
)
export type LayoutSignInProps = React.ComponentProps<typeof LayoutSignIn>
