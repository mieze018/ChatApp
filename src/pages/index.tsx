import type { AppPropsType } from '@/src/pages/_app'

import { LayoutChat } from '@/src/components/layout/LayoutChat'
import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { useAuthDelete } from '@/src/hooks/firebase/useAuthDelete'
import { useGetMessages } from '@/src/hooks/firebase/useGetMessages'
import { usePostMessage } from '@/src/hooks/firebase/usePostMessage'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'
import { timestampToRelativeDate } from '@/src/libs/formatTIme'

export default function Home({ isAuthLoading, user }: AppPropsType) {
  const { displayName, setDisplayName, setFile, file, error, handleSignUp, progress } = useSignUp()
  const { chats, isLoading, isBlank } = useGetMessages()
  const { message, setMessage, handleSendMessage } = usePostMessage()
  const { deleteAccount } = useAuthDelete()
  const isSubmitBlocked = !displayName || !file || progress > 0
  const userToPass = user && {
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    uid: user?.uid,
  }
  const chatsToPath = chats.map((chat) => {
    return {
      ...chat,
      createdAt: timestampToRelativeDate(chat.createdAt),
    }
  })
  if (user) {
    return (
      <LayoutChat
        chats={chatsToPath}
        isLoading={isLoading}
        isBlank={isBlank}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        user={user}
        onLogout={deleteAccount}
      />
    )
  }
  return (
    <LayoutSignIn
      user={userToPass}
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
  )
}
