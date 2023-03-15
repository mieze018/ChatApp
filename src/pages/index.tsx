import type { AppPropsType } from '@/src/pages/_app'

import { PageLoading } from '@/src/components/atom/PageLoading'
import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'

export default function Home({ isAuthLoading, user }: AppPropsType) {
  const { displayName, setDisplayName, setFile, file, error, handleSignUp, progress } = useSignUp()
  const isSubmitBlocked = !displayName || !file || progress > 0

  if (isAuthLoading || user) return <PageLoading />
  return (
    <LayoutSignIn
      user={undefined}
      onLogout={() => null}
      handleSignUp={handleSignUp}
      setDisplayName={setDisplayName}
      displayName={displayName}
      setFile={setFile}
      file={file}
      error={error}
      progress={progress}
      isSubmitBlocked={isSubmitBlocked}
    />
  )
}
