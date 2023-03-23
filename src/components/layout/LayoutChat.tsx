import tw from 'twin.macro'

import type { LayoutProps } from '@/src/components/layout/Layout'
import type { usePostMessageType } from '@/src/hooks/firebase/usePostMessage'
import type {
  authUserType,
  chatType,
  errorType,
  isBlankType,
  isLoadingChatsType,
} from '@/src/libs/states'

import { ChatInput } from '@/src/components/combined/ChatMessageInput'
import { ChatMessageList } from '@/src/components/combined/ChatMessageList'
import { Layout } from '@/src/components/layout/Layout'

const WrapperChat = tw.div`h-full w-full 
grid items-center justify-center [grid-template-rows: 1fr max-content] content-between
px-4 mx-auto
`
const ScrollWrapper = tw.div`overflow-y-auto w-screen h-[inherit] bg-gray-100`

export const LayoutChat: React.FC<
  LayoutProps & {
    user: authUserType
    chats: chatType[]
    isLoadingChat: isLoadingChatsType
    isBlank: isBlankType
    message: chatType['message']
    setMessage: (value: chatType['message']) => void
    handleSendMessage: usePostMessageType['handleSendMessage']
    error: errorType
  }
> = ({
  user,
  onLogout,
  chats,
  isLoadingChat,
  isBlank,
  message,
  setMessage,
  handleSendMessage,
  error,
}) => (
  <Layout user={user} onLogout={onLogout} isOverflowYHidden={true}>
    <WrapperChat>
      <ScrollWrapper>
        <ChatMessageList chats={chats} user={user} isLoading={isLoadingChat} isBlank={isBlank} />
      </ScrollWrapper>
      <ChatInput
        error={error}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </WrapperChat>
  </Layout>
)
