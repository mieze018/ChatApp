import tw from 'twin.macro'

import type { AppPropsType } from '@/src/pages/_app'

import NoUserImageIcon from '@/public/icons/no-user-image.svg'
import { Button } from '@/src/components/atom/Button'
import { ErrorWrapper } from '@/src/components/atom/ErrorWrapper'
import { InputFile } from '@/src/components/atom/InputFIle'
import { PageLoading } from '@/src/components/atom/PageLoading'
import { TextInput } from '@/src/components/atom/TextInput'
import { Layout } from '@/src/components/layout/Layout'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'
import { microCopies } from '@/src/libs/microCopies'

const Card = tw.div`grid gap-8 items-center justify-center p-10 bg-white rounded shadow-md max-w-sm mx-auto`
const Label = tw.label`grid justify-items-center`
const ButtonWrapper = tw.div`grid items-center gap-1 justify-items-center`

export default function Home({ isAuthLoading, user }: AppPropsType) {
  const { displayName, setDisplayName, setFile, file, error, handleSignUp, progress } = useSignUp()
  const isSubmitBlocked = !displayName || !file || progress > 0

  if (isAuthLoading || user) return <PageLoading />
  return (
    <Layout user={undefined} onLogout={() => null}>
      <form onSubmit={handleSignUp}>
        <Card>
          <p className="my-8 text-2xl font-semibold"> {microCopies.チャットを始めましょう}</p>

          <Label>
            <NoUserImageIcon css={tw`w-20 h-20 mb-2 text-gray-light`} />

            <InputFile accept="image/*" onChange={(e) => setFile(e.target.files?.[0])} />
            <span className="sr-only t-2">{microCopies.ユーザーアイコンを選択してください}</span>
          </Label>

          <Label css={tw`cursor-pointer`}>
            <TextInput
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="p-3 mb-5 border-2 rounded outline-none w-80 focus:border-purple-700"
              placeholder={microCopies.お名前}
            />
          </Label>
          <ButtonWrapper>
            <Button type="submit" disabled={isSubmitBlocked}>
              {microCopies.チャットルームへ入室}
            </Button>
            <progress value={progress} max="100"></progress>
          </ButtonWrapper>

          {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
        </Card>
      </form>
    </Layout>
  )
}
