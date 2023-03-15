import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { LayoutChat } from '@/src/components/layout/LayoutChat'
import type { useSignUpType } from '@/src/hooks/firebase/useSingUp'
import type { authUserType } from '@/src/types/firebaseDB'

import NoUserImageIcon from '@/public/icons/no-user-image.svg'
import { Button } from '@/src/components/atom/Button'
import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'
import { InputFile } from '@/src/components/atom/InputFIle'
import { TextInput } from '@/src/components/atom/TextInput'
import { Layout } from '@/src/components/layout/Layout'
import { microCopies } from '@/src/libs/microCopies'

const WrapperSignIn = tw.div`h-full w-full 
grid items-center justify-center
px-4 mx-auto
`
const SignInHeader = tw.h2`my-8 text-2xl font-semibold text-center`
const FormCard = tw.form`grid gap-8 items-center justify-center p-10 bg-white rounded shadow-md max-w-sm mx-auto`
const Label = tw.label`grid justify-items-center`
const ButtonWrapper = tw.div`grid items-center gap-1 justify-items-center`

export const LayoutSignIn: React.FC<
  LayoutProps & {
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
      <FormCard onSubmit={handleSignUp}>
        <SignInHeader>{microCopies.signInHeader}</SignInHeader>

        <Label css={tw`cursor-pointer`}>
          <NoUserImageIcon css={tw`w-20 h-20 mb-2 text-gray-light`} />

          <InputFile accept="image/*" onChange={(e) => setFile(e.target.files?.[0])} />
          <span className="sr-only t-2">{microCopies.srAvatarInput}</span>
        </Label>

        <Label>
          <TextInput
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="p-3 mb-5 border-2 rounded outline-none w-80 focus:border-purple-700"
            placeholder={microCopies.signInDisplayNamePlaceholder}
          />
        </Label>
        <ButtonWrapper>
          <Button type="submit" disabled={isSubmitBlocked}>
            {microCopies.signInSubmit}
          </Button>
          <progress value={progress} max="100"></progress>
        </ButtonWrapper>

        {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
      </FormCard>
    </WrapperSignIn>
  </Layout>
)
export type LayoutChatProps = React.ComponentProps<typeof LayoutChat>
