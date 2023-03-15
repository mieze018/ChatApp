import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { LayoutChat } from '@/src/components/layout/LayoutChat'
import type { useGetMessagesType } from '@/src/hooks/firebase/useGetMessages'
import type { useSendMessageType } from '@/src/hooks/firebase/useSendMessage'
import type { authUserType, chatType } from '@/src/types/firebaseDB'

import { ChatInput } from '@/src/components/combined/ChatInput'
import { ChatMessageList } from '@/src/components/combined/ChatMessageList'
import { Layout } from '@/src/components/layout/Layout'

const WrapperSignIn = tw.div`h-full w-full 
grid items-center justify-center
px-4 mx-auto
`
const ScrollWrapper = tw.div`overflow-y-auto w-screen h-[inherit]`

export const LayoutSignIn: React.FC<
  LayoutProps & {
    user: authUserType
    chats: chatType[]
    isLoading: useGetMessagesType['isLoading']
    isBlank: useGetMessagesType['isBlank']
    message: chatType['message']
    setMessage: useSendMessageType['setMessage']
    handleSendMessage: useSendMessageType['handleSendMessage']
  }
> = ({ user, onLogout, chats, isLoading, isBlank, message, setMessage, handleSendMessage }) => (
  <Layout user={user} onLogout={onLogout} isOverflowYHidden={true}>
    <WrapperSignIn>
      <ScrollWrapper>
        <ChatMessageList chats={chats} user={user} isLoading={isLoading} isBlank={isBlank} />
      </ScrollWrapper>
      <ChatInput message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </WrapperSignIn>
  </Layout>
)
export type LayoutChatProps = React.ComponentProps<typeof LayoutChat>
