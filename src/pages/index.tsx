import { useEffect, useState } from 'react'

import type { User } from 'firebase/auth'
import type { AppProps } from 'next/app'

import { OverRayProgress } from '@/src/components/combined/OverRayProgress'
import { LayoutChat } from '@/src/components/layout/LayoutChat'
import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { useAuthDelete } from '@/src/hooks/firebase/useAuthDelete'
import { useGetMessages } from '@/src/hooks/firebase/useGetMessages'
import { usePostMessage } from '@/src/hooks/firebase/usePostMessage'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'
import { authListener } from '@/src/libs/firebase/authListener'
import { timestampToRelativeDate } from '@/src/libs/formatTIme'

export default function Home() {
  const [user, setUser] = useState<userStateType['user']>(undefined)
  const [isAuthLoading, setIsAuthLoading] = useState(false)
  const { displayName, setDisplayName, setFile, file, error, handleSignUp, progress } = useSignUp({
    setUser,
  })
  useEffect(() => {
    authListener({ setUser, setIsAuthLoading })
  }, [user])
  const { chats, isLoading, isBlank } = useGetMessages(user)
  const { message, setMessage, handleSendMessage } = usePostMessage()
  const { deleteAccount } = useAuthDelete({ setIsAuthLoading })
  const isSubmitBlocked = !displayName || !file || !!progress
  const isPosting = !user || progress || isAuthLoading
  const isInitLoading = isAuthLoading || user === undefined
  const userToDisplay = user
    ? {
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        uid: user?.uid,
      }
    : undefined
  const chatsToDisplay = chats.map((chat) => ({
    ...chat,
    createdAt: timestampToRelativeDate(chat.createdAt),
  }))

  if (isInitLoading) return <OverRayProgress />
  if (user && user.photoURL) {
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
        {isPosting && <OverRayProgress progressPercentage={progress} />}
      </>
    )
  }
  return (
    <>
      <LayoutSignIn
        user={userToDisplay}
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
      {isAuthLoading && <OverRayProgress progressPercentage={progress} />}
    </>
  )
}

export type userStateType = {
  user: User | null | undefined
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
}
export type authLoadingStateType = {
  isAuthLoading: boolean
  setIsAuthLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type AppPropsType = userStateType & authLoadingStateType & AppProps
