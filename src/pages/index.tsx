import { useAtom, useAtomValue } from 'jotai'

import type { User } from 'firebase/auth'
import type { AppProps } from 'next/app'

import { OverRayLoading } from '@/src/components/combined/OverRayLoading'
import { LayoutChat } from '@/src/components/layout/LayoutChat'
import { LayoutSignIn } from '@/src/components/layout/LayoutSignIn'
import { useAuthDelete } from '@/src/hooks/firebase/useAuthDelete'
import { useAuthListener } from '@/src/hooks/firebase/useAuthListener'
import { useError } from '@/src/hooks/firebase/useError'
import { useGetMessages } from '@/src/hooks/firebase/useGetMessages'
import { usePostMessage } from '@/src/hooks/firebase/usePostMessage'
import { useSignUp } from '@/src/hooks/firebase/useSingUp'
import { useIsLoading } from '@/src/hooks/useIsLoading'
import {
  chatsAtom,
  displayNameAtom,
  imageFileAtom,
  isBlankAtom,
  messageAtom,
  progressAtom,
  userAtom,
} from '@/src/libs/states'

export default function Home() {
  useAuthListener()
  useGetMessages()
  const [displayName, setDisplayName] = useAtom(displayNameAtom)
  const [file, setFile] = useAtom(imageFileAtom)
  const [message, setMessage] = useAtom(messageAtom)

  const { deleteAccount } = useAuthDelete()
  const { error } = useError()
  const { handleSendMessage } = usePostMessage()
  const { handleSignUp } = useSignUp()
  const { isInitLoading, isPhotoUploaded, isPosting, isSignUpSubmitBlocked } = useIsLoading()
  const { isLoadingChats } = useIsLoading()

  const chats = useAtomValue(chatsAtom)
  const isBlank = useAtomValue(isBlankAtom)
  const progress = useAtomValue(progressAtom)
  const user = useAtomValue(userAtom)

  if (isInitLoading) return <OverRayLoading />
  if (isPhotoUploaded && chats) {
    return (
      <>
        <LayoutChat
          chats={chats}
          isLoading={isLoadingChats}
          isBlank={isBlank}
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          user={user}
          onLogout={deleteAccount}
          error={error}
        />
        {isPosting && <OverRayLoading progressPercentage={progress} />}
      </>
    )
  }
  return (
    <>
      <LayoutSignIn
        user={user}
        onLogout={deleteAccount}
        handleSignUp={handleSignUp}
        setDisplayName={setDisplayName}
        displayName={displayName}
        setFile={setFile}
        file={file}
        error={error}
        progress={progress}
        isSignUpSubmitBlocked={isSignUpSubmitBlocked}
      />
      {isPosting && <OverRayLoading progressPercentage={progress} />}
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
