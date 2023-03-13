import type { AppPropsType } from '@/src/pages/_app'

import { PageLoading } from '@/src/components/atom/PageLoading'
import { Chat } from '@/src/components/combined/Chat'
import { Layout } from '@/src/components/layout/Layout'
import { useGetMessages } from '@/src/hooks/firebase/useGetMessages'
import { useSendMessage } from '@/src/hooks/firebase/useSendMessage'

export const Page = ({ isAuthLoading, user }: AppPropsType) => {
  const { chats, isLoading, isBlank } = useGetMessages()
  const { message, setMessage, handleSendMessage } = useSendMessage()

  if (isAuthLoading || !user) return <PageLoading />
  return (
    <Layout user={{ displayName: user.displayName ?? '' }} onLogout={() => null}>
      <Chat
        chats={chats}
        isLoading={isLoading}
        isBlank={isBlank}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </Layout>
  )
}

export default Page
