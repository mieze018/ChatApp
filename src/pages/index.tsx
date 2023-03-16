import type { AppPropsType } from '@/src/pages/_app'

import { OverRayProgress } from '@/src/components/combined/OverRayProgress'
import { LayoutChat } from '@/src/components/layout/LayoutChat'
import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { useAuthDelete } from '@/src/hooks/firebase/useAuthDelete'
import { useGetMessages } from '@/src/hooks/firebase/useGetMessages'
import { usePostMessage } from '@/src/hooks/firebase/usePostMessage'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'
import { timestampToRelativeDate } from '@/src/libs/formatTIme'

export default function Home({ isAuthLoading, setIsAuthLoading, user, setUser }: AppPropsType) {
  const { displayName, setDisplayName, setFile, file, error, handleSignUp, progress } = useSignUp({
    setUser,
  })
  const { chats, isLoading, isBlank } = useGetMessages()
  const { message, setMessage, handleSendMessage } = usePostMessage()
  const { deleteAccount } = useAuthDelete({ setIsAuthLoading })
  const isSubmitBlocked = !displayName || !file || !!progress
  const isPosting = !user || progress || isAuthLoading
  const userToDisplay = user && {
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    uid: user?.uid,
  }
  const chatsToDisplay = chats.map((chat) => {
    return {
      ...chat,
      createdAt: timestampToRelativeDate(chat.createdAt),
    }
  })
  if (user) {
    return (
      <>
        <LayoutChat
          chats={chatsToDisplay}
          isLoading={isLoading}
          isBlank={isBlank}
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          user={user}
          onLogout={deleteAccount}
          error={error}
        />
        {isPosting && <OverRayProgress />}
      </>
    )
  }
  return (
    <>
      <LayoutSignIn
        user={userToDisplay}
        isLoading={!!(isAuthLoading || user)}
        onLogout={deleteAccount}
        handleSignUp={handleSignUp}
        setDisplayName={setDisplayName}
        displayName={displayName}
        setFile={setFile}
        file={file}
        error={error}
        progress={progress}
        isSubmitBlocked={isSubmitBlocked}
      />
      {isAuthLoading && <OverRayProgress />}
    </>
  )
}
