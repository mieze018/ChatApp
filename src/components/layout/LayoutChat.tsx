import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { useGetMessagesType } from '@/src/hooks/firebase/useGetMessages'
import type { usePostMessageType } from '@/src/hooks/firebase/usePostMessage'
import type { authUserType, chatType } from '@/src/types/firebaseDB'

import { ChatInput } from '@/src/components/combined/ChatMessageInput'
import { ChatMessageList } from '@/src/components/combined/ChatMessageList'
import { Layout } from '@/src/components/layout/Layout'

const WrapperChat = tw.div`h-full w-full 
grid items-center justify-center [grid-template-rows: 1fr max-content] content-between
px-4 mx-auto
`
const ScrollWrapper = tw.div`overflow-y-auto w-screen h-[inherit]`

export const LayoutChat: React.FC<
  LayoutProps & {
    user: authUserType | undefined
    chats: chatType[]
    isLoading: useGetMessagesType['isLoading']
    isBlank: useGetMessagesType['isBlank']
    message: chatType['message']
    setMessage: usePostMessageType['setMessage']
    handleSendMessage: usePostMessageType['handleSendMessage']
  }
> = ({ user, onLogout, chats, isLoading, isBlank, message, setMessage, handleSendMessage }) => (
  <Layout user={user} onLogout={onLogout} isOverflowYHidden={true}>
    <WrapperChat>
      <ScrollWrapper>
        <ChatMessageList chats={chats} user={user} isLoading={isLoading} isBlank={isBlank} />
      </ScrollWrapper>
      <ChatInput message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </WrapperChat>
  </Layout>
)
export type LayoutChatProps = React.ComponentProps<typeof LayoutChat>
