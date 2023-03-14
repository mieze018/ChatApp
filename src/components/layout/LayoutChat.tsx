import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { useGetMessagesType } from '@/src/hooks/firebase/useGetMessages'
import type { useSendMessageType } from '@/src/hooks/firebase/useSendMessage'
import type { authUserType, chatType } from '@/src/types/firebaseDB'

import { PageLoading } from '@/src/components/atom/PageLoading'
import { ChatInput } from '@/src/components/combined/ChatInput'
import { ChatMessageList } from '@/src/components/combined/ChatMessageList'
import { Layout } from '@/src/components/layout/Layout'
import { microCopies } from '@/src/libs/microCopies'

const WrapperChat = tw.div` h-full w-full
grid items-center justify-center [grid-template-rows: max-content 1fr max-content]
 content-between`
const WrapperBlank = tw.div``

export const LayoutChat: React.FC<
  LayoutProps & {
    user: authUserType
    chats: chatType[]
    isLoading: useGetMessagesType['isLoading']
    isBlank: useGetMessagesType['isBlank']
    message: useSendMessageType['message']
    setMessage: useSendMessageType['setMessage']
    handleSendMessage: useSendMessageType['handleSendMessage']
  }
> = ({ user, onLogout, chats, isLoading, isBlank, message, setMessage, handleSendMessage }) => (
  <Layout
    user={{ displayName: user?.displayName ?? '', photoURL: user?.photoURL ?? '' }}
    onLogout={onLogout}
  >
    <WrapperChat>
      {isLoading && <PageLoading />}
      {isBlank && <WrapperBlank>{microCopies.chatBlank}</WrapperBlank>}
      {!isBlank && <ChatMessageList chats={chats} user={user} />}
      <ChatInput message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </WrapperChat>
  </Layout>
)
export type LayoutChatProps = React.ComponentProps<typeof LayoutChat>
