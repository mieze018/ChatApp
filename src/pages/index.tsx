import type { AppPropsType } from '@/src/pages/_app'

import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'

export default function Home({ isAuthLoading, user }: AppPropsType) {
  const { displayName, setDisplayName, setFile, file, error, handleSignUp, progress } = useSignUp()
  const isSubmitBlocked = !displayName || !file || progress > 0

  const userToPass = user && {
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    uid: user?.uid,
  }

  return (
    <LayoutSignIn
      user={userToPass}
      //TODO: firebaseのユーザー削除メソッドを実装する
      isLoading={!!(isAuthLoading || user)}
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
