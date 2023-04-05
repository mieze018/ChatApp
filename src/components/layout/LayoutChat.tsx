import tw from 'twin.macro'

import type { usePostMessageType } from '@/src/hooks/firebase/usePostMessage'
import type { authUserType, chatType, errorType } from '@/src/libs/states'

import { ChatInput } from '@/src/components/combined/ChatMessageInput'
import { ChatMessageList } from '@/src/components/combined/ChatMessageList'

const WrapperChat = tw.div`h-full w-full 
grid items-center justify-center [grid-template-rows: 1fr max-content] content-between
px-4 mx-auto
`
const ScrollWrapper = tw.div`overflow-y-auto w-screen h-[inherit] bg-gray-100`

export const LayoutChat: React.FC<{
  user: authUserType
  chats: chatType[] | undefined
  message: chatType['message']
  setMessage: (value: chatType['message']) => void
  handleSendMessage: usePostMessageType['handleSendMessage']
  error: errorType
}> = ({ user, chats, message, setMessage, handleSendMessage, error }) => (
  <WrapperChat>
    <ScrollWrapper>
      <ChatMessageList chats={chats} user={user} />
    </ScrollWrapper>
    <ChatInput
      error={error}
      message={message}
      setMessage={setMessage}
      handleSendMessage={handleSendMessage}
    />
  </WrapperChat>
)
