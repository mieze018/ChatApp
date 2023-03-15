import type { AppPropsType } from '@/src/pages/_app'

import { PageLoading } from '@/src/components/atom/PageLoading'
import { LayoutChat } from '@/src/components/layout/LayoutChat'
import { useGetMessages } from '@/src/hooks/firebase/useGetMessages'
import { useSendMessage } from '@/src/hooks/firebase/useSendMessage'

export const Page = ({ isAuthLoading, user }: AppPropsType) => {
  const { chats, isLoading, isBlank } = useGetMessages()
  const { message, setMessage, handleSendMessage } = useSendMessage()

  if (isAuthLoading || !user) return <PageLoading />
  return (
    <LayoutChat
      chats={chats}
      isLoading={isLoading}
      isBlank={isBlank}
      message={message}
      setMessage={setMessage}
      handleSendMessage={handleSendMessage}
      user={user}
      onLogout={() => null}
    />
  )
}

export default Page
