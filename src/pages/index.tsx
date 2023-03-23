import { useAtom, useAtomValue } from 'jotai'

import { OverRayLoading } from '@/src/components/combined/OverRayLoading'
import { Layout } from '@/src/components/layout/Layout'
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
  const progress = useAtomValue(progressAtom)
  const user = useAtomValue(userAtom)
  const isShowLoading =
    isPosting || isInitLoading || isLoadingChats || (user && chats === undefined)
  return (
    <Layout user={user} onSignOut={deleteAccount} isOverflowYHidden={!user}>
      {isPhotoUploaded && user && (
        <LayoutChat
          chats={chats}
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          user={user}
          error={error}
        />
      )}
      {!isInitLoading && !user && (
        <LayoutSignIn
          user={user}
          handleSignUp={handleSignUp}
          setDisplayName={setDisplayName}
          displayName={displayName}
          setFile={setFile}
          file={file}
          error={error}
          progress={progress}
          isSignUpSubmitBlocked={isSignUpSubmitBlocked}
        />
      )}
      {isShowLoading && <OverRayLoading progressPercentage={progress} />}
    </Layout>
  )
}
